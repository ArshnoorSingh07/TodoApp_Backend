// import model
const Todo=require('../models/ToDo')

exports.getTodo=async(req,res) =>{
    try{
        // fetch all todo items from database
        const todos=await Todo.find({});
        
        // response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo data is fetched"
        }) 
    }
    catch(err){
        console.error(err)
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server error"
        })
    }
}

exports.getTodoById = async(req,res) =>{
    try{
        // extract todo item basis on ID
        const id=req.params.id;
        const todo=await Todo.findById({_id:id});

        // data for given id not found
        if(!todo){
            return res.status(400).json({
                success:false,
                message:"No data found with given id"
            })
        }
        
        // data for given id is found 
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server Error"
        })
    }
}