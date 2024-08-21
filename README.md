# Codocx

Codocx é uma ferramenta de linha de comando (CLI) simples e eficiente para automatizar a geração de documentação de qualquer projeto de software, independentemente da linguagem de programação ou stack tecnológica utilizada.

## Visão Geral

A documentação é essencial, mas muitas vezes negligenciada. Codocx resolve esse problema ao permitir que desenvolvedores gerem documentação atualizada e acessível com apenas alguns comandos. A ferramenta é compatível com qualquer linguagem de programação, garantindo flexibilidade e eficiência em qualquer ambiente de desenvolvimento.

## Execução via CLI

A CLI do Codocx foi projetada para ser extremamente fácil de usar, permitindo a geração de documentação diretamente a partir da estrutura de código do seu projeto.

### Como Usar a CLI

1. **Instale a CLI globalmente:**

    ```bash
    npm install -g codocx
    ```

2. **Gere a documentação:**

    Navegue até o diretório do seu projeto e execute:

    ```bash
    codocx -p <DIR_PROJECT>
    ```

    Você pode substituir `<DIR_PROJECT>` pelo caminho do diretório do projeto. Se não fornecer nenhum caminho, a CLI usará o diretório atual.

### Ignorando Arquivos

Caso queira excluir determinados arquivos ou diretórios da geração da documentação, você pode configurar isso editando o arquivo `src/constants/index.ts`.

## Requisitos

Antes de começar, certifique-se de que sua máquina atenda aos seguintes requisitos:

-   Node.js (versão 14 ou superior)
-   npm (gerenciador de pacotes do Node.js)

## Como Rodar o Projeto Manualmente

Se preferir rodar o Codocx localmente, siga estas etapas:

1. **Clone o repositório:**

    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd codocx
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    ```

3. **Inicie o projeto:**

    ```bash
    npm start
    ```

## Contribuindo

Contribuições são bem-vindas! Se você deseja contribuir com o Codocx, siga estas etapas:

1. **Fork o repositório.**
2. **Crie uma branch para sua feature ou correção de bug:**

    ```bash
    git checkout -b minha-nova-feature
    ```

3. **Faça suas alterações e commit:**

    ```bash
    git commit -m "Adiciona nova feature"
    ```

4. **Envie para o repositório remoto:**

    ```bash
    git push origin minha-nova-feature
    ```

5. **Abra um Pull Request.**

Por favor, certifique-se de que suas contribuições estão de acordo com o código de conduta do projeto.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações.

## Notas Finais

Todos os commits deste repositório foram gerados utilizando o [GiteAI](https://giteai.dev), uma ferramenta que automatiza a criação de mensagens de commit, garantindo consistência e clareza no histórico do projeto.
