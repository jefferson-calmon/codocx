import path from "path";
import chalk from "chalk";
import { log, spinner } from "@clack/prompts";
import { readdir, stat } from "fs/promises";

import { TreeItem } from "../types/index.ts";
import { shouldIgnore } from "./shouldIgnore.ts";
import { flattenTree } from "./flattenTree.ts";

export async function getTree(dirPath: string) {
    const loading = spinner();

    loading.start(
        `Analisando a árvore de arquivos e diretórios de ${chalk.cyan(dirPath)}`
    );

    const { tree, ignored } = await getTreeFromDirPath(dirPath);

    const flattedTree = flattenTree(tree);

    loading.stop(`Analise concluída de ${chalk.cyan(dirPath)}`);

    log.message(
        `${chalk.cyan(
            flattedTree.length
        )} arquivos/diretórios encontrados\n${chalk.red(
            ignored.length
        )} arquivos/diretórios ignorados\n${chalk.green(
            flattedTree.length - ignored.length
        )} documentos que vão ser gerados`
    );

    return { items: tree, flattedTree };
}

async function getTreeFromDirPath(dirPath: string, currentPath = "") {
    let tree: TreeItem[] = [];
    let ignored = [];

    const list = await readdir(dirPath);

    const promises = list.map(async (file) => {
        const filePath = path.join(dirPath, file);
        const relativePath = path.join(currentPath, file);
        const stats = await stat(filePath);

        const isIgnored = shouldIgnore(relativePath);
        const isDirectory = stats.isDirectory();

        if (isIgnored) return ignored.push(relativePath);

        const item: TreeItem = {
            type: isDirectory ? "directory" : "file",
            name: file,
            path: relativePath,
            fullPath: path.resolve(filePath),
            children: isDirectory
                ? (await getTreeFromDirPath(filePath, relativePath)).tree
                : undefined,
        };

        tree.push(item);
    });

    await Promise.all(promises);

    return { tree, ignored };
}
