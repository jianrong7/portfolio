import express from "express";
const app = express();
const port = 5000;

app.get("/", (_, res) => {
  res.send("hello world");
});

app.listen(port, () => console.log(`Running on port ${port}`));
