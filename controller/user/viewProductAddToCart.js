const addToCartModel = require("../../models/cartProduct");

const viewProductAddToCart = async(req,res)=>{
 try {
    const currentUser = req.userId
    const allCartProducts = await addToCartModel.find({
        userId: userId
    })
    res.json({
        data: currentUser,
        success: true,
        error: false
    })
 } catch (error) {
    res.status(500).json({
        message: error.message,
        error: true,
        success: false
    }); 
 }
}

module.exports = viewProductAddToCart