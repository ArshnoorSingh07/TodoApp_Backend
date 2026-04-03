const Todo = require('../models/ToDo')

exports.deleteTodo = async(req,res) =>{
    try{
        
        const {id} = req.params;
        // const {title,description} = req.body;

        const todo = await Todo.findByIdAndDelete(id)

        res.status(200)
        .json({
            success:true,
            data:todo,
            message:"Entry deleted successfully",
        })

    }
    catch(err){
        console.error(err)
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server Error"
        })
    }
}

