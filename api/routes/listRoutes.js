'use strict';
module.exports = function(app) {
    var list = require('../controllers/listController');

    //list routes
    app.route('/tasks')
        .get(list.list_task)
        .post(list.create_task);

    app.route('/tasks/:taskID')
        .get(list.read_task)
        .put(list.update_task)
        .delete(list.delete_task);
};