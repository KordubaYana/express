const fs = require("fs");

module.exports.readData = function readData() {
  const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));
  return data;
};

module.exports.updateData = function updateData(data, res) {
  fs.writeFileSync("./data.json", JSON.stringify(data), "utf8");
  res.send(data);
};
