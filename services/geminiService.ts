import { GoogleGenAI, Chat } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize client only if key exists to prevent immediate crashes in no-key envs
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const SYSTEM_INSTRUCTION = `You are "EstateAI", a highly professional, warm, and knowledgeable real estate assistant for a luxury agency. 
Your goal is to qualify potential leads who are visiting the website.
Keep your responses concise (under 50 words) and conversational.
Do not ask for all information at once. Ask one qualifying question at a time.
Key information to gather:
1. Are they looking to buy or sell?
2. What is their approximate budget or expected sale price?
3. What is their timeline?
If they ask about the market, give a generic positive sentiment about high demand and low inventory.
End your messages with a question to keep the conversation going.
`;

let chatSession: Chat | null = null;

export const initChat = () => {
  if (!ai) return null;
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!ai || !chatSession) {
    return "I'm currently in demo mode without a live brain. Please configure the API Key to chat with me!";
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "I'm sorry, I didn't quite catch that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};