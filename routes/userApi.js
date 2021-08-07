const express = require("express");
const router = express.Router();
// use the model 
const User = require('../models/userSchema');


// get all users 
router.get('users', async (req,res)=>{
    try {
        const users = await User.find({});
        res.json(users);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error!" });
      }
});
// get todo by id
router.get("/users/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error!" });
    }
  });
// create todo
router.post("/users", async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error!" });
    }
  });
  // update todo
router.put("/users/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error!" });
    }
  });
  // delete todo
  router.delete("/users/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndRemove(req.params.id);
      res.json({ message: "todo has been deleted successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error!" });
    }
  });
 
module.exports = router;