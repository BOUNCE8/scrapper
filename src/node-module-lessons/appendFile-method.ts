const fs = require("fs");

fs.appendFile(
  "src/created-files/look-a-new-file.html",
  "hello new content!",
  (err) => {
    if (err) throw err;
    console.log("Saved!");
  }
);

// I am creating a new file of type html,
// I am designating where this file will be created (if it already exist, the 2nd argument will be appended to the existing content)
// I am then adding some content as the second arguement
