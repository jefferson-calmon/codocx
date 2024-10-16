import fs from "fs";
import { promises as fsPromises } from "fs";
import path from "path";
import { DEFAULT_IGNORE } from "../constants/index.ts";

const ignoreFilePath = path.join(path.resolve(), ".codocxignore");

export async function loadIgnorePatterns(ignoreFileContent?: string) {
    if (!fs.existsSync(ignoreFilePath)) {
        await fsPromises.writeFile(ignoreFilePath, DEFAULT_IGNORE, "utf8");

        return await loadIgnorePatterns(DEFAULT_IGNORE);
    }

    ignoreFileContent = ignoreFileContent
        ? ignoreFileContent
        : await fsPromises.readFile(ignoreFilePath, "utf8");

    return ignoreFileContent
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith("#"));
}

export function shouldIgnore(
    ignorePatterns: string[],
    filePath: string
): boolean {
    let ignored = false;

    for (let pattern of ignorePatterns) {
        let negated = false;

        // Handle negation (e.g., `!pattern`)
        if (pattern.startsWith("!")) {
            negated = true;
            pattern = pattern.slice(1);
        }

        // If pattern ends with `/`, it applies to directories
        if (pattern.endsWith("/")) {
            pattern += "**";
        }

        // Convert the pattern into a regex
        const regexPattern = pattern
            .replace(/\./g, "\\.") // Escape dots
            .replace(/\*\*/g, ".*") // `**` matches any number of directories or files
            .replace(/\*/g, "[^/]*") // `*` matches any sequence of characters except `/`
            .replace(/\/$/, "/.*"); // Ensure trailing `/` matches any files in the directory

        const regex = new RegExp(`^${regexPattern}`);

        // Test the file path against the pattern
        if (regex.test(filePath)) {
            ignored = !negated;
        }
    }

    return ignored;
}
