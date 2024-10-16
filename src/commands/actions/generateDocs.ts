import chalk from "chalk";
import { spinner } from "@clack/prompts";
import { writeFile } from "fs/promises";

import { TreeItemFlatted } from "../../types/index.ts";
import { generateDoc } from "../../helpers/generateDoc.ts";
import { saveDocForFile } from "../../helpers/saveDocForFile.ts";

export async function generateDocs(flattedTree: TreeItemFlatted[]) {
    const loading = spinner();
    const generation = createGenerationProgressController(flattedTree);

    for (const item of flattedTree) {
        loading.start(`Gerando documentação para ${chalk.cyan(item.path)}`);

        try {
            const doc = await generateDoc(item, flattedTree);
            await saveDocForFile(item.path, doc);

            loading.stop(`Documentação gerada para ${chalk.cyan(item.path)}`);
            generation.succeed(item);
        } catch (error) {
            loading.stop(
                `Erro ao gerar documentação de ${chalk.cyan(
                    item.path
                )}: ${chalk.red(error)}`
            );
            generation.failed(item);
        }

        await generation.logProgress();
    }
}

function createGenerationProgressController(flattedTree: TreeItemFlatted[]) {
    const progress = {
        succeed: [],
        failed: [],
    };

    return {
        failed: (item: TreeItemFlatted) => progress.failed.push(item),
        succeed: (item: TreeItemFlatted) => progress.succeed.push(item),
        logProgress: async () => {
            await writeFile(
                "./codocx.progress.json",
                JSON.stringify(
                    {
                        total: flattedTree.length,
                        succeed: progress.succeed.length,
                        failed: progress.failed.length,
                        pending:
                            flattedTree.length -
                            progress.failed.length -
                            progress.succeed.length,

                        data: {
                            failed: progress.failed,
                        },
                    },
                    null,
                    4
                )
            );
        },
    };
}
