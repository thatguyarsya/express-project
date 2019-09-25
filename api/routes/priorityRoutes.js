
module.exports = function(app){

const { addPriority } = require('../controllers/priorityController')

app.route("/priority").post(addPriority)
}
