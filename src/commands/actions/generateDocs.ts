import chalk from "chalk";
import { log, spinner } from "@clack/prompts";

import { TreeItemFlatted } from "../../types/index.ts";
import { generateDoc } from "../../helpers/generateDoc.ts";
import { saveDocForFile } from "../../helpers/saveDocForFile.ts";
import { IGNORE } from "../../constants/index.ts";

export async function generateDocs(flattedTree: TreeItemFlatted[]) {
    const loading = spinner();

    for (const item of flattedTree) {
        if (shouldIgnore(item.name)) {
            log.info(
                `Geração da documentação de ${chalk.cyan(item.name)} foi pulada`
            );
        }

        loading.start(`Gerando documentação para ${chalk.cyan(item.path)}`);

        const doc = await generateDoc(item, flattedTree);
        await saveDocForFile(item.path, doc);

        loading.stop(`Documentação gerada para ${chalk.cyan(item.path)}`);
    }
}

function shouldIgnore(path: string): boolean {
    return IGNORE.some((pattern) => {
        const regexPattern = pattern
            .replace(/\./g, "\\.")
            .replace(/\*/g, ".*")
            .replace(/\/$/, "/.*");

        const regex = new RegExp(`^${regexPattern}$`);

        return regex.test(path);
    });
}
