const noteArray = require("../db/noteDB.js");
const noteData = require("../db/noteDB.js");
var router = require("express").Router();
const fs = require("fs");

// ===============================================================================
// ROUTING
// ===============================================================================

router.get("/notes", function (req, res) {
  res.json(noteData);
});

router.get("/notes/:id", function (req, res) {
  res.json(noteData);
});

router.post("/notes", function (req, res) {
  res.json(true);
  fs.appendFileSync(db.json, req.body, "UTF-8");
  console.log(noteData);
});

router.delete("/clear", function (req, res) {
  // Empty out the arrays of data
  noteArray.length = 0;
});

module.exports = router;
