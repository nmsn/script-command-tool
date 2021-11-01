#!/usr/bin/env node

const { program } = require("commander");
// const inquirer = require("inquirer");
program.version("0.0.1");
const fs = require("fs");
const child_process = require("child_process");
const stdout = require("./stdout");
const inquirer  = require("./inquirer");

console.log("stdout", stdout);

// 获取命令执行路径
const cwd = process.cwd();

program
  .option("-a, --all", "show all shell")
  .option("-e, --exec", "select a shell and exec");

program.parse(process.argv);
const options = program.opts();

console.log(options);

fs.readFile("package.json", (err, data) => {
  if (err) throw err;

  const { scripts } = JSON.parse(data);
  // console.log(scripts);

  if (options.all) {
    stdout(scripts);

    // exit();
  } else if (options.exec) {
    
    // console.log(scriptsArr[0].shell);
    // child_process.exec(scriptsArr[0].shell, (err, stdout, stderr) =>
    //   console.log("ok", err, stdout, stderr),
    // );
    
    inquirer(scripts);
  } else {
    console.log("...other operation");
  }
});
