const fs = require("fs");

fs.rename(
  "src/created-files/anotherNewFile.html",
  "src/created-files/weDaBestFile.txt",
  (err) => {
    if (err) throw err;
    console.log("Re-named File!");
  }
);

// This method allows for renanimg of files as well as where given file is re-created
