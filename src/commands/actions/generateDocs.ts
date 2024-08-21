import chalk from "chalk";
import { spinner } from "@clack/prompts";

import { TreeItemFlatted } from "../../types/index.ts";
import { generateDoc } from "../../helpers/generateDoc.ts";
import { saveDocForFile } from "../../helpers/saveDocForFile.ts";

export async function generateDocs(flattedTree: TreeItemFlatted[]) {
    const loading = spinner();

    for (const item of flattedTree) {
        loading.start(`Gerando documentação para ${chalk.cyan(item.path)}`);

        const doc = await generateDoc(item, flattedTree);
        await saveDocForFile(item.path, doc);

        loading.stop(`Documentação gerada para ${chalk.cyan(item.path)}`);
    }
}
