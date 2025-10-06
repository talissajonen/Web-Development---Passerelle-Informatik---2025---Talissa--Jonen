module.exports= (logger) => {
    return (req, res, next) => {
        logger.log(`Response statuscode ${res.statusCode}`);
        next(); 
        }; 
    }
