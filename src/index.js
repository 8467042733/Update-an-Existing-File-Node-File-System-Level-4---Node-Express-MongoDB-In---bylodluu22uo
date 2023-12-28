const fs = require("fs/promises");
const fileName = "myfile.txt";
const updateFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  fs.appendFile(fileName,fileContent, function(err) {
    if(err) throw err;
    console.log("File Updated");
});
};
updateFile(fileName, "Newton School, An online learning platform");
module.exports = updateFile;
