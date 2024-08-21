export interface TreeItem {
    type: "directory" | "file";
    name: string;
    path: string;
    fullPath: string;
    children?: TreeItem[];
}

export interface TreeItemFlatted {
    type: "directory" | "file";
    name: string;
    path: string;
    fullPath: string;
}
