import fs from "fs";

import * as Const from "../constants/index.ts";
import { TreeItemFlatted } from "../types/index.ts";
import { getPromptResult } from "../utils/ai.ts";

type Item = TreeItemFlatted;

export async function generateDoc(item: Item, tree: Item[]) {
    let content = "";
    const context = tree.map((item) => item.path);

    if (item.type === "file") {
        content = await fs.promises.readFile(item.fullPath, "utf-8");
    }

    const prompt = [
        "Baseado no conteúdo da pasta/arquivo fornecido, gere a documentação em formato Markdown.",
        Const.ASK_FOR_METADATA_PROMPT,
        Const.TREE_CONTEXT_PROMPT.replace("{{JSON}}", JSON.stringify(context)),
        Const.TREE_ITEM_DETAILS_PROMPT.replace(
            "{{JSON}}",
            JSON.stringify(item)
        ),
        `Conteúdo do arquivo: ${content || "Não disponível (É uma pasta)"}`,
        "Documentação (Não é necessário envolver a resposta dentro de crases '```):",
    ].join("\n");

    const { text } = await getPromptResult(prompt);

    return text;
}
