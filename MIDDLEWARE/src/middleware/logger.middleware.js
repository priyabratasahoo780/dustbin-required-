function logger(req,res,next){
    const TimeStamp = new Date()
    console.log(`${TimeStamp}`)
    next();
}

module.exports = logger;