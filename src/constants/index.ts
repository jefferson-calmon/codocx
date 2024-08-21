export const IGNORE = [
    // Diretórios de dependências e pacotes
    "node_modules",
    "bower_components",
    "vendor",

    // Diretórios e arquivos gerados por sistemas de controle de versão
    ".git",
    ".svn",
    ".hg",
    ".idea", // IntelliJ IDEA
    ".vscode", // VS Code

    // Diretórios e arquivos gerados por ferramentas de build e compilação
    "dist",
    "build",
    "out",
    "coverage",
    ".next",
    "public", // Next.js
    "build",
    ".cache",
    ".next",
    "tmp",
    "logs",

    // Diretórios e arquivos específicos de ambientes
    ".env",
    ".env.local",
    ".env.development",
    ".env.production",
    ".env.test",

    // Diretórios e arquivos de testes
    "test-results",
    "cypress",
    "e2e",
    ".test",
    "spec",
    "tests",

    // Arquivos de configuração do sistema e IDE
    "*.sublime-workspace",
    "*.sublime-project",
    "*.code-workspace",
    "*.vscode",
    "*.idea",
    "*.iml",
    "*.swp",
    "*.swo",
    "*.log",
    "*.tmp",
    "*.bak",
    "*.orig",
    "*.pid",
    "*.seed",

    // Arquivos de cache e log
    ".npm",
    ".yarn",
    ".yarn-cache",
    ".pnpm-store",
    ".pnp",
    ".pnp.js",
    ".pnp.cjs",
    "yarn-error.log",
    "package-lock.json",
    "yarn.lock",

    // Diretórios e arquivos de deployment
    ".vercel",
    ".serverless",
    ".netlify",
    ".terraform",
    "deploy",
    "deployment",

    // Diretórios e arquivos de documentação e geração de código
    "docs",
    "doc",
    "generated",
    "out-tsc",
    "typings",
    "tsconfig.tsbuildinfo",

    // Arquivos específicos para ignorar
    ".DS_Store", // macOS
    "Thumbs.db", // Windows
    "ehthumbs.db", // Windows
    "desktop.ini", // Windows
    "npm-debug.log",
    "yarn-debug.log",
    "yarn-error.log",
    "pnpm-debug.log",
    "lerna-debug.log",
    "tsconfig.json",
    "jsconfig.json",
    "package-lock.json",
    "yarn.lock",
    // "*.md",
    // "*.mdx",

    // Video exclude
    ".github",
    ".gitignore",
    ".editorconfig",
    ".eslintignore",
    ".eslintrc.json",
    "LICENSE",
    "prettier.config.js",
    "tsup.config.ts",

    // Padrões de arquivos
    "*.jpg",
    "*.jpeg",
    "*.png",
    "*.gif",
    "*.pdf",
    "*.log",
    "*.tmp",
    "*.bak",
    "*.swp",
    "*.swo",
    "*.zip",
    "*.tar",
    "*.gz",
    "*.rar",
];

export const SYSTEM_PROMPT = `Você é um engenheiro de software senior com dezenas de anos de experiência profissional. Você escreve documentações sobre código e estruturas de forma simples, clara e concisa. Seu tom de escrita é técnico.`;

export const ASK_FOR_METADATA_PROMPT = `
Além do título e descrição dentro da doc, adicione no topo do arquivo (como um metadata) um 'title' e um 'description' (essa doc vai ser usada como página no mintlify). 

Exemplo abaixo: 
\`\`\`
---
title: Introdução
description: 'Um guia passo a passo para começar a usar o serviço rapidamente'
---
\`\`\`

Se o nome do arquivo não for genérico (index.ts, index.tsx, etc), você deve usar o nome do arquivo como título. Ex:

\`\`\`
---
title: useForm
description: '[DESCRIÇÃO...]'
---
\`\`\`
`.trim();

export const TREE_CONTEXT_PROMPT =
    "A estrutura de pastas/arquivos é (Apenas para servir de contexto): ```{{JSON}}```";

export const TREE_ITEM_DETAILS_PROMPT =
    "A estrutura do item que você deve gerar a doc é: ```{{JSON}}```";
