const errorhandler = (err,req,res,next) => {
    console.log(err)
    res.status(500).json({msg: err.msg})
}

module.exports = errorhandler
