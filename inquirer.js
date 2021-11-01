#!/usr/bin/env node

const inquirer = require("inquirer");
const child_process = require("child_process");

// const { mb2b } = require("./utils");
// 获取命令执行路径
// const cwd = process.cwd();

module.exports = (scripts) => {
  const list = Object.entries(scripts).map(([key, value]) => ({
    name: `${key}：${value}`,
    value,
  }));

  inquirer
    .prompt([
      {
        type: "list",
        message: "Select script and execute",
        name: "script",
        choices: list,
      },
    ])
    .then((answer) => {
      console.log(answer);
      child_process.exec(answer.script, (err, stdout, stderr) =>
        console.log("ok", err, stdout, stderr),
      );
    });
};
