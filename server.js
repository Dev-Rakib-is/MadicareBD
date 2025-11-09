require("dotenv").config();
const app = require("./app");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["https://madicarebd.vercel.app", "http://localhost:5173"],
    credentials: true,
  })
);

app.set("trust proxy", 1);

app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
