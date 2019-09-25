"use strict";

const Task = require("../models/listModel");
const mongoose = require("mongoose");

exports.list_task = function(req, res) {
  Task.find()
    .then(result => res.json(result))
    .catch(error => res.send(error));

  //  {}, function(err, task) {
  //      if (err)
  //      res.send(err);
  //     res.json(task);
  //  });
};

exports.create_task = function(req, res) {
  const new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.read_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.update_task = function(req, res) {
  Task.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    function(err, task) {
      if (err) res.send(err);
      res.json(task);
    }
  );
};

exports.delete_task = function(req, res) {
  Task.remove(
    {
      _id: req.params.taskId
    },
    function(err, task) {
      if (err) res.send(err);
      res.json({ message: "Task successfully deleted" });
    }
  );
};

exports.getpopulate = function(req, res) {
  Task.find()
    .populate("priority", "priority -_id")
    .then(result => res.json(result))
    .catch(error => res.send(error));
};
