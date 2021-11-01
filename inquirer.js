#!/usr/bin/env node

const inquirer = require('inquirer');
const child_process = require('child_process');

module.exports = scripts => {
  const list = Object.entries(scripts).map(([key, value]) => ({
    name: `${key}：${value}`,
    value,
  }));

  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Select script and execute',
        name: 'script',
        choices: list,
      },
    ])
    .then(answer => {
      child_process.exec(answer.script, (err, stdout, stderr) => {
        if (err) {
          console.log(err, stderr);
        } else {
          console.log(stdout);
        }
      });
    });
};
