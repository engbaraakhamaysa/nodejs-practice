// -----------------------------------------------------
//  Setting up Express and activating JSON Middleware
// -----------------------------------------------------

// 1) Calling the Express library
// - express = A framework built on top of Node.js to facilitate building servers and APIs
const { render } = require("ejs");
const express = require("express");

// 2) Create a new Express application
// - app = The variable we will use to define Routes , Middleware & Handle requests and responses.
const app = express();

// 3) Activate Middleware to convert JSON
// - express.json() = A middleware function that automatically converts any JSON data in the request body
// into a JavaScript object for access via req.body
app.use(express.json());

// -------------------------
// Express Routes Example
// -------------------------

/*
Basic Idea:
- The HTTP protocol has main methods.
- Each method has a universally agreed-upon function:
GET -> Read/Display
POST -> Add
PUT -> Edit
DELETE -> Delete
- Express allows you to specify routes for each type of request, so the server knows how to behave accordingly.
*/

// GET = Fetch data (view only)
app.get("/", (request, respouns) => {
  respouns.send("Hello From the /");
});

app.get("/hello", (request, respouns) => {
  respouns.send("hello");
}); // brwesr get in the url

// PUT = Modify existing data
app.put("/test", (request, respouns) => {
  respouns.send("Hi");
}); // brwesr get in the url

// POST = Add new data
app.post("/add", (request, respouns) => {
  respouns.send("Add Commeit");
});
// DELETE = delete data
app.delete("/delete", (request, respouns) => {
  respouns.send("Delete");
});

app.get("/number", (req, res) => {
  let number = "";
  for (let i = 0; i <= 100; i++) {
    number += i + "-";
  }
  res.send(`the number are: ${number}`);
});

// -------------------------------
// Types of Parameters in Express
// -------------------------------

// 1) Path Parameters
// - Parameters that come from the link itself.
// - Syntax: /:paramName
// - Example: /sumNumber/5/10 → number1=5 , number2=10
app.get("/sumNumber/:number1/:number2", (req, res) => {
  const num1 = req.params.number1;
  const num2 = req.params.number2;
  const result = Number(num1) + Number(num2);
  console.log(req.params);
  res.send(`Ruslt Is ${result}`);
});

// 2) Body Parameters
// - Parameters sent within the request body.
// - Typically used with POST or PUT.
// - Example: Sending JSON via Postman
// { "name": "Baraa" }
app.get("/sayHello", (req, res) => {
  const Name = req.body.name;
  console.log(req.body);
  res.send(`Hello ${Name}`);
});

// 3) Query Parameters
// - Parameters that come after the ? character in the link.
// - Example: /sayHelloQuery?age=20 → age=20
app.get("/sayHelloQuery", (req, res) => {
  console.log(req.query);
  res.send(`Age = ${req.query.age}`);
});

// ---------------------------------------------
// ٌResponse JSON
// ---------------------------------------------
app.get("/sendJson", (req, res) => {
  res.json({
    name: req.body.name,
    age: req.query.age,
    cores: "Reive viedo 1:12",
  });
});

app.get("/html", (req, res) => {
  res.send("<h1> Hello Word </h1>");
});

app.get("/htmlPage", (req, res) => {
  //   res.send(__dirname+"./views/numbers.html");//path file
  res.sendFile(__dirname + "/views/numbers.html");
});

app.get("/ejsPage", (req, res) => {
  let number = "";
  for (let i = 0; i <= 100; i++) {
    number += i + "-";
  }
  res.render("Numbers.ejs", {
    name: "baraa,",
    number: number,
  }); //he serch forder name views this name is iimportant
});

// ---------------------------------------------
// Running the server (Listening for Requests)
// ---------------------------------------------

//// app.listen(port, callback)
//listen the request from the Browser or any client the number port the server is 3000
app.listen(3000, () => {
  console.log("I Am Listenig In Port 3000");
});
