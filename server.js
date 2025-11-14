
console.log("➡️ Loading app.js...");

const app = require("./app");

console.log("➡️ app.js loaded successfully.");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
