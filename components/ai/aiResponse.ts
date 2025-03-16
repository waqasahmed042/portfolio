import { Together } from "together-ai";
import UIText from "@/utilities/testResource";

const API_KEY = "9b71f320089bb44e0096002f8420b9afdbaaea57073ec6ed2e7358acd789bdbc";

export const generateResponse = async (
    message: string,
    callback: (error: Error | null, data: string | null) => void
): Promise<void> => {
    try {
        const together = new Together({ apiKey: API_KEY });

        const response = await together.chat.completions.create({
            model: "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo",
            messages: [
                { role: "system", content: UIText.askAI.prompt },
                { role: "user", content: message },
            ],
            max_tokens: 512,
            temperature: 0.7,
        });

        if (response.choices && response.choices.length > 0) {
            const content = response.choices[0]?.message?.content || "";
            callback(null, content);
        } else {
            throw new Error("No response received from the AI model.");
        }
    } catch (error) {
        console.error("Error generating AI response:", error);
        const err = error instanceof Error ? error : new Error(String(error));
        callback(err, null);
    }
};