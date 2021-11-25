const path = require("path");
const fs = require("fs");

fs.readdir(process.argv[2], function (err, files) {
  if (err) {
    console.log(err);
  } else {
    files.map(function (fileName) {
      if (path.extname(fileName) === `.${process.argv[3]}`) {
        console.log(fileName);
      }
    });
  }
});
