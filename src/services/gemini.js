import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({
  apiKey,
});

export async function askVotingAI(question, monitors, messages) {
  const prompt = `
You are an AI assistant for a Class Monitor Voting Application.

Your job is to answer questions about the current voting data and understand follow-up questions using the conversation history.

CURRENT VOTING DATA:
${JSON.stringify(monitors, null, 2)}

CONVERSATION HISTORY:
${JSON.stringify(messages, null, 2)}

CURRENT USER QUESTION:
${question}

RULES:
- Answer only about the voting application and the provided voting data.
- Use the voting data to answer accurately.
- Use conversation history to understand follow-up questions.
- Do not invent voters, monitors, or vote counts.
- If the information is not available, clearly say you don't have that information.
- Keep the answer concise and easy to understand.
`;

  const response = await ai.interactions.create({
    model: "gemini-3.6-flash",
    input: prompt,
  });

  return response.output_text;
}