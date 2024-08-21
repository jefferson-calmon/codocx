import { TreeItem, TreeItemFlatted } from "../types/index.ts";

export function flattenTree(tree: TreeItem[]) {
    let items: TreeItemFlatted[] = [];

    function traverse(nodes: TreeItem[]) {
        for (const node of nodes) {
            if (node.type === "file") {
                items.push({
                    type: node.type,
                    name: node.name,
                    path: node.path,
                    fullPath: node.fullPath,
                });
            } else if (node.type === "directory" && node.children) {
                items.push({
                    type: node.type,
                    name: node.name,
                    path: node.path,
                    fullPath: node.fullPath,
                });

                traverse(node.children);
            }
        }
    }

    traverse(tree);

    return items;
}
