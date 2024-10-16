export const DEFAULT_IGNORE = `# Diretórios de dependências e pacotes
node_modules
bower_components
vendor
Pods
platforms

# Diretórios e arquivos gerados por sistemas de controle de versão
.git
.svn
.hg
.idea
.vscode
*.gitignore

# Diretórios e arquivos gerados por ferramentas de build e compilação
dist
build
out
coverage
.next
public
.cache
tmp
logs
lib
bin
target
obj

# Diretórios e arquivos específicos de ambientes
.env
.env.*
*.env
*.env.*

# Diretórios e arquivos de testes
test-results
cypress
e2e
spec
tests
*.test.*

# Arquivos de configuração do sistema e IDE
*.sublime-workspace
*.sublime-project
*.code-workspace
*.vscode
*.idea
*.iml
*.swp
*.swo
*.log
*.tmp
*.bak
*.orig
*.pid
*.seed

# Arquivos de cache e log
.npm
.yarn
.pnpm-store
.pnp
.pnp.*
*.log
*.cache

# Diretórios e arquivos de deployment
.vercel
.serverless
.netlify
.terraform
deploy
deployment

# Diretórios e arquivos de documentação e geração de código
docs
doc
generated
out-tsc
typings
tsconfig.tsbuildinfo

# Arquivos específicos para ignorar
.DS_Store
Thumbs.db
ehthumbs.db
desktop.ini
npm-debug.log
yarn-debug.log
pnpm-debug.log
lerna-debug.log

# Arquivos de projeto e configuração
tsconfig.json
jsconfig.json
*.lock
LICENSE
.prettierignore
.prettierrc
.editorconfig
.eslintignore
.eslintrc.*

# Arquivos de mídia, pacotes e compressão
*.jpg
*.jpeg
*.png
*.gif
*.pdf
*.svg
*.mp4
*.zip
*.tar
*.gz
*.rar
*.lock
*.sqlite3
*.exe
*.dmg
*.pkg
*.iso
`;

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
