#!/usr/bin/env node

// const inquirer = require("inquirer");
const fs = require("fs");
const child_process = require("child_process");

// 获取命令执行路径
const cwd = process.cwd();

fs.readFile("package.json", (err, data) => {
  if (err) throw err;

  const { scripts } = JSON.parse(data);
  console.log(scripts);

  const scriptsArr = Object.entries(scripts).map(([name, shell]) => ({
    name,
    shell,
  }));

  console.log(scriptsArr);

  console.log(scriptsArr[0].shell);

  child_process.exec(scriptsArr[0].shell, (err, stdout, stderr) =>
    console.log("ok", err, stdout, stderr),
  );
});
