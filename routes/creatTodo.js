var dbTask = require('../models/todo')
exports.createTodo = (req,res,next)=>{
 if(!req.body.title){
        res.json({
            success: false,
            msg: "Please provide all details"
        })
    }else{
        var newTask = new dbTask({
            title: req.body.title,
            desc: req.body.desc

                    })
        newTask.save((err, data)=>{
            if(err){
                next();
            }else{
                res.json({
                    success: true,
                    msg: "Task created"
                })
            }
        })
    }
}