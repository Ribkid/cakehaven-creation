import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';
import OpenAI from "https://deno.land/x/openai@v4.24.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
const assistantId = 'asst_95b4yEQtZEk5oobKFvpMXC3r';

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

    // Initialize OpenAI client
    const openai = new OpenAI({
      apiKey: openAIApiKey,
    });

    // Create a new thread
    const thread = await openai.beta.threads.create();

    // Add the user's message to the thread
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: message,
    });

    // Run the assistant
    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: assistantId,
    });

    // Wait for the run to complete
    let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    
    while (runStatus.status !== "completed") {
      if (runStatus.status === "failed") {
        throw new Error("Assistant run failed");
      }
      
      // Wait for 1 second before checking again
      await new Promise(resolve => setTimeout(resolve, 1000));
      runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    }

    // Get the assistant's response
    const messages = await openai.beta.threads.messages.list(thread.id);
    const assistantMessage = messages.data[0].content[0];
    
    if (assistantMessage.type !== 'text') {
      throw new Error('Unexpected response type from assistant');
    }

    const assistantResponse = assistantMessage.text.value;

    // Store assistant response in database
    const { error: assistantError } = await supabase
      .from('chat_messages')
      .insert([
        { role: 'assistant', content: assistantResponse, order_id: orderId }
      ]);

    if (assistantError) {
      throw new Error(`Error inserting assistant message: ${assistantError.message}`);
    }

    return new Response(
      JSON.stringify({ message: assistantResponse }),
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