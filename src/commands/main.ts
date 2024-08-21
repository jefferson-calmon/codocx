import * as prompt from "@clack/prompts";
import chalk from "chalk";
import { Command } from "commander";

import { getTree } from "../helpers/getTree.ts";
import { flattenTree } from "../helpers/flattenTree.ts";
import { cancel } from "../utils/prompt.ts";
import { OPENAI_API_KEY_REQUIRED_ERR } from "../constants/errors.ts";
import { generateIntroduction } from "./actions/generateIntroduction.ts";
import { generateDocs } from "./actions/generateDocs.ts";

interface CommandOptions {
    Path: string;
}

export async function main(options: CommandOptions, command: Command) {
    const loading = prompt.spinner();

    if (!process.env.OPENAI_API_KEY) return cancel(OPENAI_API_KEY_REQUIRED_ERR);

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
