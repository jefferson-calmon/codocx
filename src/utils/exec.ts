import { ExecException, exec as execSync } from "child_process";

export interface ExecResponse {
    error: ExecException;
    stdout: string;
    stderr: string;
}

export function exec(command: string) {
    return new Promise<ExecResponse>((resolve, reject) => {
        execSync(command, (error, stdout, stderr) => {
            resolve({ error, stderr, stdout });
        });
    });
}
