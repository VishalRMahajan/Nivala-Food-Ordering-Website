import userModel from '../models/userModel.js';

const addToCart = async (req,res) =>{
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;

        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        }
        else{
            cartData[req.body.itemId] += 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        return res.status(200).json({success:true,message:"Item Added to Cart"});
    }
    catch (error){
        console.log(error);
        return res.status(500).json({success:false,message:"Error"});   
    }
}

const removeFromCart = async (req,res) =>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;

        if (cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -=1;
        }

        await userModel.findByIdAndUpdate(req.body.userId,{cartData});

        return res.status(200).json({success:true,message:"Item Removed from Cart"});

    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:"Error"});   
    }
}

const getCart = async (req,res) =>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;

        return res.status(200).json({success:true,cartData});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:"Error"});   
    }
}

export {addToCart,removeFromCart,getCart}