const express = require("express");
const request = require("request");


const router = express.Router();

router.get("/", (req, res) => {
  request(
    "https://jav-rest-api-htpvmrzjet.now.sh/api/actress?name=",
    (err, response, body) => {
      const actress = JSON.parse(body).result;
      res.render('index',{actress: actress})
    }
  );
});
module.exports = router;
