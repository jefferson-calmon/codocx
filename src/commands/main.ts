import * as prompt from "@clack/prompts";
import chalk from "chalk";
import { Command } from "commander";

import { getTree } from "../helpers/getTree.ts";
import { flattenTree } from "../helpers/flattenTree.ts";
import { generateIntroduction } from "./actions/generateIntroduction.ts";
import { generateDocs } from "./actions/generateDocs.ts";
import { validateApiKeyEnv } from "../helpers/validateApiKeyEnv.ts";

interface CommandOptions {
    Path: string;
}

export async function main(options: CommandOptions, command: Command) {
    const loading = prompt.spinner();

    await validateApiKeyEnv();

    loading.start("Analisando a árvore de arquivos e diretórios");

    const tree = await getTree(options.Path);
    const flattedTree = flattenTree(tree.items);

    loading.stop(
        `${chalk.green(flattedTree.length)} arquivos/diretórios encontrados`
    );
    prompt.log.message(`${chalk.red(tree.ignored.length)} foram ignorados`);

    await generateIntroduction(flattedTree);
    await generateDocs(flattedTree);
    // await generateMintJson(flattedTree);

    // await writeFile("./test-output.json", JSON.stringify(flattedTree, null, 4));
}
