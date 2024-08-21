import path from "path";
import fs from "fs";

export async function saveDocForFile(filePath: string, content: string) {
    const { outputDir, fileName } = getDocPath(filePath);

    content = content.trim();

    if (!fs.existsSync(outputDir)) {
        await fs.promises.mkdir(outputDir, { recursive: true });
    }

    if (content.startsWith("```") && content.endsWith("```")) {
        content = content.slice(3, -3);
    }

    const targetPath = path.join(outputDir, fileName);

    await fs.promises.writeFile(targetPath, content, "utf8");

    return { path: targetPath };
}

function getDocPath(filePath: string) {
    const fileDir = path.dirname(filePath);
    const fileName = path.basename(filePath, path.extname(filePath)) + ".md";

    const outputDir = path.join(path.dirname(""), "docs", "code", fileDir);

    return {
        path: path.join(outputDir, fileName),
        outputDir,
        fileDir,
        fileName,
    };
}
