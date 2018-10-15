const express = require("express");
const routes = express.Router();
const Ninja = require("../models/ninja");

// for get to retrive from db
routes.get("/ninjas", function(req, res,next) {
  res.send({ type: "GET" });
});

// for post to db
  routes.post("/ninjas", function(req, res,next) {
  Ninja.create(req.body).then(function(ninja) {
    res.send(ninja);
  }).catch(next);
});

// for put to db

routes.put("/ninjas/:id", function(req, res,next) {

  Ninja.findByIdAndUpdate({_id:req.params.id},req.body).then(function(ninja){
    res.send(ninja)
  })
});

// for delete  i.e CRUD :)

routes.delete("/ninjas/:id", function(req, res,next) {

  //console.log(req.params.id);
  Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
    res.send(ninja);

  });
});

// inorder to this get used we need to export

module.exports = routes;
