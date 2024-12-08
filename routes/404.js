const express = require("express");
const router = express.Router();
// localhost:5050/404

router.route("/").get((req, res) => {
  res.render("404");
});

module.exports = router;
