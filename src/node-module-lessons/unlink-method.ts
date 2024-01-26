const fs = require("fs");

fs.unlink("src/created-files/anotherNewFile.html", (err) => {
  if (err) throw err;
  console.log("Deleted!");
});

// This method deletes the file in the direct path
