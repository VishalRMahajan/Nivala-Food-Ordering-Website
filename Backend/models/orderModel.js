import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    orderId: {type: String, required: true},
    userId:{type: String, required: true},
    items: {type: Array, required: true},
    amount: {type: Number, required: true},
    address:{type:Object, required:true},
    status: {type: String, default: 'Order Processing'},
    date:{type:Date, default: Date.now},
    payment:{type:Boolean, default: false}
})

const orderModel = mongoose.models.order || mongoose.model('order', orderSchema);

export default orderModel;