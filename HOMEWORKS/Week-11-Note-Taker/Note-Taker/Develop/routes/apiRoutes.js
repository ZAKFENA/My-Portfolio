const noteArray = require("../db/noteDB.js");
var noteeData = require("../db/noteDB.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(noteDB);
  });

  app.post("/api/notes", function (req, res) {
    noteDB.push(req.body);
  });

  app.post("/api/clear", function (req, res) {
    // Empty out the arrays of data
    noteArray.length = 0;
  });
};
