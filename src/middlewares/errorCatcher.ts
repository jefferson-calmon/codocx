import * as prompt from "@clack/prompts";

export function withErrorCatcher(callback: (...args: any) => Promise<void>) {
    console.log("");
    return async (...args: any) => {
        try {
            await callback(...args);
        } catch (error) {
            const message =
                error?.response?.data?.error ?? error?.message ?? error;

            prompt.log.error(`Erro: ${message}`);
            process.exit(0);
        } finally {
            prompt.log.message("");
        }
    };
}
