import path from "path";
import { Command } from "commander";

import { getTree } from "../helpers/getTree.ts";
import { generateIntroduction } from "./actions/generateIntroduction.ts";
import { generateDocs } from "./actions/generateDocs.ts";
import { configApiKeyEnv } from "../helpers/validateApiKeyEnv.ts";

interface CommandOptions {
    Path: string;
}

export async function main(options: CommandOptions, command: Command) {
    await configApiKeyEnv();

    const targetPath = options.Path || path.resolve();

    const { flattedTree } = await getTree(targetPath);

    await generateIntroduction(flattedTree);
    await generateDocs(flattedTree);
    // await generateMintJson(flattedTree);

    // await writeFile("./test-output.json", JSON.stringify(flattedTree, null, 4));
}
