import * as prompt from "@clack/prompts";

export function cancel(message = "Operação cancelada") {
    prompt.cancel(message);
    process.exit(0);
}
