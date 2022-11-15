const express = require("express");

const app = express();
app.listen(5500, () => console.log("listening at 5500"));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

app.post("/api", (request, response) => {
  console.log("I got a request!");
  console.log(request.body);
  const data = request.body;
  response.json({
    status: "success",
    latitude: data.lat,
    longitude: data.lon,
  });
});
