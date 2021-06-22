/** @format */
const fs = require("fs");
const generatePage = require("./src/page-template.js");
const readMeDataArgs = process.argv.slice(2);
const [name, github] = readMeDataArgs;






fs.writeFile('./index.html', generatePage(name, github), (err) => {
  if (err) throw new Error(err);

  console.log("ReadMe complete! Check out index.html to see the final product!");
});


















