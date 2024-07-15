const { CustomApiError } = require("../errors/error-custom")

const errorHandler = (err,req,res,next)=>{
    if(err instanceof CustomApiError){
        return res.status(err.codeStatus).json({message:err.message})
    }
    res.status(500).json({message:"Something went wrong"})


}

module.exports = errorHandler