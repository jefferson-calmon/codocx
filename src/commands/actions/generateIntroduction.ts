import fs from "fs";
import chalk from "chalk";
import { spinner } from "@clack/prompts";

import { TreeItemFlatted } from "../../types/index.ts";
import {
    ASK_FOR_METADATA_PROMPT,
    SYSTEM_PROMPT,
    TREE_CONTEXT_PROMPT,
} from "../../constants/index.ts";
import { createPromptAbility } from "../../utils/ai.ts";
import { saveDocForFile } from "../../helpers/saveDocForFile.ts";

export async function generateIntroduction(itemsList: TreeItemFlatted[]) {
    const context = itemsList.map((item) => item.path);

    const loading = spinner();

    loading.start(`Gerando introdução da documentação`);

    const packageJson = itemsList.find((i) => i.name === "package.json");
    const readme = itemsList.find((i) => i.name.toLowerCase() === "readme.md");

    const packageJsonContent = packageJson
        ? await fs.promises.readFile(packageJson?.fullPath, "utf-8")
        : "not found";

    const readmeContent = readme
        ? await fs.promises.readFile(readme?.fullPath, "utf-8")
        : "not found";

    const prompt = [
        "Baseado na estrutura de pastas/arquivos fornecida, gere uma introdução geral sobre em formato Markdown.",
        "A introdução deve conter toda a parte de visão geral do projeto, sobre o que o projeto se trata, como rodar o projeto, requisitos, e etc",
        ASK_FOR_METADATA_PROMPT,
        TREE_CONTEXT_PROMPT.replace("{{JSON}}", JSON.stringify(context)),
        `package.json: \`\`\`${packageJsonContent}\`\`\``,
        `README: \`\`\`${readmeContent}\`\`\``,
        "Introdução (Não é necessário envolver a resposta com crases '```'):",
    ].join("\n");

    const { text } = await createPromptAbility(SYSTEM_PROMPT).getResult(prompt);

    const { path } = await saveDocForFile("introduction", text);

    loading.stop(`Introdução gerada & salva em ${chalk.cyan(path)}`);
}
