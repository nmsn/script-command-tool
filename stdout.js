const stdout = (scripts) => {
  const scriptObjList = Object.entries(scripts).map(([name, shell]) => ({
    name,
    shell,
  }));

  const str = scriptObjList
    .map(({ name, shell }) => `${name}: ${shell}`)
    .join("\n");

  console.log(str);
};

module.exports = (scripts) => {
  const scriptObjList = Object.entries(scripts).map(([name, shell]) => ({
    name,
    shell,
  }));

  const str = scriptObjList
    .map(({ name, shell }) => `${name}: ${shell}`)
    .join("\n");

  console.log(str);
};