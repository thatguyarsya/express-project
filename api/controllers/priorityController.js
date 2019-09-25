const Task = require("../models/listModel")
const Priority = require("../models/priority")
module.exports = {
    addPriority: async(req, res) => {
        const priority = await Priority.create({
            priority: req.body.priority
        });
        const task = await Task.findOneAndUpdate(
            {_id: req.body._id},
            { $push: {priority: priority._id}},
            { new: true}
        );

        res.status(200).send({
            message: "priority updated",
            priority,
            task
        });
    }
}