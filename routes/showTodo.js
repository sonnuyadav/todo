var dbTodo = require('../models/listtodo')
exports.todo = (req, res) => {
    dbTodo.find({}, (err, data) => {
        if (err) {
            res.json({
                success: false,
                msg: "Database error"
            })
        } else {
            res.json({
                success: true,
                msg: "All data",
                data: data
            })
        }
    })
}