const fs = require("fs");

fs.writeFile(
  "src/created-files/winter.html",
  `<!DOCTYPE html>
<html>
<body>
<h1>Winter</h1>
<p>I love the snow!</p>
</body>
</html>
`,
  (err) => {
    if (err) throw err;
    console.log("Replaced");
  }
);

// method replaces the specified file and content if it exists
// If the file does not exist, a new file, containing the specified content, will be created
// I am then adding some content as the second arguement
