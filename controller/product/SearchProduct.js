const searchProduct = async(req,res)=>{
    try {
        const query = req.query.q
        console.log(query)
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            success: false,
            error: true
        })
    }
}
module.exports = searchProduct