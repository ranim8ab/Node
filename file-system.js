const fs = require("fs");

// Create welcome.txt
fs.writeFileSync("welcome.txt", "Hello Node");

// Read hello.txt
fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});