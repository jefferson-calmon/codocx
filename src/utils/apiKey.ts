import { promises as fs } from "fs";
import * as path from "path";
import { log } from "@clack/prompts";
import chalk from "chalk";

const envFilePath = path.resolve(process.cwd(), ".env.local");

async function set(apiKey: string) {
    try {
        const envContent = `OPENAI_API_KEY=${apiKey}\n`;

        await fs.writeFile(envFilePath, envContent, { flag: "a" });

        log.success(`Chave da API salva em ${chalk.cyan(envFilePath)}`);
    } catch (err) {
        log.error(
            "Erro ao salvar a chave de API. Entre em contato com o suporte se o problema persistir."
        );
    }
}

async function get(): Promise<string | null> {
    try {
        const data = await fs.readFile(envFilePath, "utf8");

        const match = data.match(/^OPENAI_API_KEY=(.+)$/m);
        if (match && match[1]) {
            return match[1];
        } else {
            log.error(
                `Chave de API não encontrada no arquivo ${chalk.cyan(
                    envFilePath
                )}.`
            );
            return null;
        }
    } catch (err) {
        return null;
    }
}

export const apiKey = {
    set,
    get,
};
