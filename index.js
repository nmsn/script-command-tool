#!/usr/bin/env node

const { program } = require("commander");
program.version("0.0.1");
const fs = require("fs");
const stdout = require("./stdout");
const inquirer  = require("./inquirer");

// 获取命令执行路径
const cwd = process.cwd();

program
  .option("-a, --all", "show all shell")
  .option("-e, --exec", "select a shell and exec");

program.parse(process.argv);
const options = program.opts();

fs.readFile(`${cwd}/package.json`, (err, data) => {
  if (err) throw err;
  const { scripts } = JSON.parse(data);
  if (options.all) {
    stdout(scripts);
  } else if (options.exec) {
    inquirer(scripts);
  } else {
    console.log("...other operation");
  }
});
