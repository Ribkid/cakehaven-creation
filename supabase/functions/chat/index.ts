import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();

    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Store user message in database
    const { error: insertError } = await supabase
      .from('chat_messages')
      .insert([
        { role: 'user', content: message }
      ]);

    if (insertError) {
      throw new Error(`Error inserting message: ${insertError.message}`);
    }

    // Get OpenAI response
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful cake shop assistant. You help customers with questions about cakes, orders, and general inquiries. Keep responses friendly and concise.'
          },
          { role: 'user', content: message }
        ],
      }),
    });

    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;

    // Store assistant response in database
    const { error: assistantError } = await supabase
      .from('chat_messages')
      .insert([
        { role: 'assistant', content: assistantMessage }
      ]);

    if (assistantError) {
      throw new Error(`Error inserting assistant message: ${assistantError.message}`);
    }

    return new Response(
      JSON.stringify({ message: assistantMessage }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in chat function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});