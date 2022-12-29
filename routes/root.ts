const express1 = require("express");
const router = express1.Router();
const path1 = require("path");

router.get("^/$|/index(.html)?", function (req: any, res: any) {
  res.sendFile(path1.join(__dirname, "..", "views", "index.html"));
});

module.exports = router;
