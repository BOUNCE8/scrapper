const fs = require("fs");

fs.open("src/created-files/my-new-file.txt", "w", (err) => {
  if (err) throw err;
  console.log("Saved Again!");
});

// I am creating a new file of type txt, by passing 'w' as the second arguement I am saying it is for writing
// I am also designating where this file will be created
// If it already exists, the file will be opened for writing
