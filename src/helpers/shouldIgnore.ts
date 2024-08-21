import { IGNORE } from "../constants/index.ts";

export function shouldIgnore(path: string): boolean {
    return IGNORE.some((pattern) => {
        if (pattern.endsWith("/")) {
            pattern += "*";
        }

        const regexPattern = pattern
            .replace(/\./g, "\\.") 
            .replace(/\*/g, ".*")
            .replace(/\/$/, "/.*");

        const regex = new RegExp(`^${regexPattern}`);

        return regex.test(path);
    });
}
