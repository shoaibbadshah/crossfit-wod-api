const express = require("express");
const v1Router = require("./v1/routes");
const app = express();

const PORT = process.env.PORT || 3000;

// for testing purpose
// app.get("/", (req, res) => {
//   res.send("<h2>It's working fine </h2>");
// });

app.use("/api/v1", v1Router);

app.listen(PORT, () => {
  console.log(`Api is listening on the port ${PORT}`);
});
