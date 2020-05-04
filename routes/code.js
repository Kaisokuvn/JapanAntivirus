const express = require("express");
const request = require("request");

const router = express.Router();

router.get("/:id", (req, res) => {
  const idoId = req.params.id;
  video_url = "https://jav-rest-api-htpvmrzjet.now.sh/api/videos/" + idoId;
  request(video_url, (err, response, body) => {
    const result = JSON.parse(body).result;

    res.render("result", { result: result });
  });
});
module.exports = router;
