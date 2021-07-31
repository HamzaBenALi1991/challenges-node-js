const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
// connect to database
const connect = require("./database/connect");
//  morgan config
app.use(morgan("dev"));
// body parser config
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
// user the model
const Todo = require("./models/todoSchema");

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my REST API!" });
});

// get all todos
app.get("/todos", async (req, res) => {
  const todos = await Todo.find({});
  res.json(todos);
});
// get todo by id
app.get("/todos/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  res.json(todo);
});

// create todo
app.post("/todos", async (req, res) => {
  const todo = await Todo.create(req.body);
  res.json(todo);
});
// update todo
app.put("/todos/:id", async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new : true });
  res.json(todo);
});
// delete todo
app.delete("/todos/:id", async (req, res) => {
  const todo = await Todo.findByIdAndRemove(req.params.id);
  res.json({ message: "todo has been deleted successfully" });
});

app.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`);
});
