#! /usr/bin/env node

import dotenv from "dotenv";
import { Command } from "commander";

import pkg from "../package.json" assert { type: "json" };
import { withErrorCatcher } from "./middlewares/errorCatcher.ts";
import { main } from "./commands/main.ts";

const program = new Command();

dotenv.config({
    override: true,
    path: "./.env.local",
});

program
    .version(pkg.version, "-v, --version", "Exibir a versão atual da CLI")
    .name("codocs")
    .option("-p, ---path <path>")
    .action(withErrorCatcher(main));

program.parse(process.argv);
