import express, { Request, Response } from "express";
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500;

app.use(express.json());

// app.use("/", express.static(path.join(__dirname, "/public"))); // can use below code for replace
app.use(express.static("public"));

app.use("/", require("./routes/root"));

app.all("*", (req: Request, res: Response) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.listen(PORT, () => {
  console.log(`server start listening on port ${PORT}`);
});
