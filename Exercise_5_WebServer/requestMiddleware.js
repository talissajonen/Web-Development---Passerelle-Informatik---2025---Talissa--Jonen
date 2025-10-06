module.exports= (logger) => {
    return (req, res, next) => {
        logger.log(`Request to ${req.url}`);
        next(); 
        }; 
    }
