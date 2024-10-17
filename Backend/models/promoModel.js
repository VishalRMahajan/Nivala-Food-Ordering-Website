import mongoose from "mongoose";

const promoSchema = new mongoose.Schema({
    promoCode: {type: String, required: true, unique: true},
    discount: {type: Number, required: true},
    expiryDate: {type: Date, required: true},
    isActive: {type: Boolean, required: true},
    createdAt: {type: Date, required: true},
    discountType: {type: String, required: true},
});

const promoModel = mongoose.model.Promo || mongoose.model("Promo", promoSchema);

export default promoModel;