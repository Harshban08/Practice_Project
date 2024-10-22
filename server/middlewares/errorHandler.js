const { contants } = require("../constants");
const errorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode){
        case contants.VALIDATION_ERROR : res.json({
            title : "Validation Failed",
            message: err.message,
            stackTrace: err.stack,
        }); 

        break;
        case constants.NOT_FOUND:res,json({
            title:"NOT FOUND",
            message: err.message,
            stackTrace: err.stack,
        });

        case constants.UNAUTHORIZED:res.json({
            title:"Unauthorized",
            message: err.message,
            stackTitle: err.stack,
        });

        case constants.SERVER_ERROR:res.json({
            title:"Server Error",
            message: err.message,
            stackTitle: err.stack,
        });

        default:
            console.log("No error, All Good!!");
            break;
    }
};

module.exports = errorHandler;