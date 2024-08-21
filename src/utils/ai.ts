import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";
import { SYSTEM_PROMPT } from "../constants/index.ts";

export function createPromptAbility(system: string) {
    async function getResult(prompt: string) {
        const result = await generateText({
            model: openai("gpt-4o-mini"),
            system,
            prompt,
        });

        return result;
    }

    return { getResult };
}

export async function getPromptResult(prompt: string) {
    const result = await generateText({
        model: openai("gpt-4o-mini"),
        system: SYSTEM_PROMPT,
        prompt,
    });

    return result;
}
