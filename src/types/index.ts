export interface TreeItem {
    type: "directory" | "file";
    name: string;
    path: string;
    fullPath: string;
    ignored: boolean;
    children?: TreeItem[];
}

export interface TreeItemFlatted {
    type: "directory" | "file";
    name: string;
    path: string;
    ignored: boolean;
    fullPath: string;
}
