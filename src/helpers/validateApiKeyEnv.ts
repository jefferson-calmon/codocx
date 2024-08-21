import dotenv from "dotenv";
import { isCancel, log, text } from "@clack/prompts";

import { apiKey } from "../utils/apiKey.ts";
import { OPENAI_API_KEY_REQUIRED } from "../constants/errors.ts";
import { cancel } from "../utils/prompt.ts";

export async function configApiKeyEnv() {
    const openAiApiKey = await apiKey.get();

    if (!openAiApiKey) {
        log.warn(OPENAI_API_KEY_REQUIRED);

        const value = await text({
            message: `Digite sua chave de api da OpenAI (Você pode gerar uma em https://platform.openai.com/account/api-keys): `,
            placeholder: "sk-proj-Bf4JfR45...",
        });

        if (isCancel(value)) return cancel();

        await apiKey.set(value);
    }

    dotenv.config({
        override: true,
        path: "./.env.local",
    });
}
