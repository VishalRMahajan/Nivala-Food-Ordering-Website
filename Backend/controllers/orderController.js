import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

const placeOrder = async (req, res) => {
    try {
        const newOrder = new orderModel({
            orderId: (req.body.userId + Date.now().toString()),
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
            payment: true,
        });


        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        res.status(201).json({ message: "Order placed successfully", order: newOrder });
    } catch (error) {
        res.status(500).json({ message: "An error occurred while placing the order", error: error.message });
    }
};

const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({userId:req.body.userId})
        return res.status(200).json({success:true,data:orders})
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:"An error occurred while fetching orders",error:error.message})
    }
}

export { placeOrder, userOrders };