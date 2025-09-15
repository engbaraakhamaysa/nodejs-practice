const express = require("express"); //get liber Express
const app = express(); //inint express to varible app

app.get("/hello", (request, respouns) => {
  respouns.send("hello");
}); // brwesr get in the url

//listen the request from the brwoser the number port the server is 3000
app.listen(3000, () => {
  console.log("I Am Listenig In Port 3000");
});
