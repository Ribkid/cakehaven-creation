
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
    const { message, orderId } = await req.json();

    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Store user message in database
    const { error: insertError } = await supabase
      .from('chat_messages')
      .insert([
        { role: 'user', content: message, order_id: orderId }
      ]);

    if (insertError) {
      throw new Error(`Error inserting message: ${insertError.message}`);
    }

    // Get chat history for context
    const { data: chatHistory, error: historyError } = await supabase
      .from('chat_messages')
      .select('*')
      .order('created_at', { ascending: true })
      .limit(10);

    if (historyError) {
      throw new Error(`Error fetching chat history: ${historyError.message}`);
    }

    // Format messages for OpenAI
    const messages = [
      {
        role: 'system',
        content: `You are a helpful cake shop assistant for Ribsys Cakes. 
        You help customers with questions about our cakes, pricing, and orders.
        Our 6-inch cakes serve 12 people and cost $90 for basic and $110 for advanced designs.
        Our 8-inch cakes serve 24 people and cost $120 for basic and $150 for advanced designs.
        Quarter slab cakes serve 20 people and cost $110 for basic and $140 for advanced designs.
        Half slab cakes serve 50 people and cost $150 for basic and $180 for advanced designs.
        Full slab cakes serve 90 people and cost $200 for basic and $230 for advanced designs.
        Cupcakes come in dozens (12) and cost $50 for basic and $75 for advanced designs.
        Keep responses friendly, concise, and focused on helping customers.`
      },
      ...chatHistory.map(msg => ({
        role: msg.role,
        content: msg.content
      }))
    ];

    // Get OpenAI response
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;

    // Store assistant response in database
    const { error: assistantError } = await supabase
      .from('chat_messages')
      .insert([
        { role: 'assistant', content: assistantMessage, order_id: orderId }
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
