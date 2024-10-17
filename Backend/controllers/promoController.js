import promoModel from "../models/promoModel.js";

const addpromo = async (req, res) => {
  try {
    const newpromo = promoModel({
      promoCode: req.body.promoCode,
      discount: req.body.discount,
      expiryDate: req.body.expiryDate,
      isActive: req.body.isActive,
      createdAt: new Date(),
      discountType: req.body.discountType,
    });

    await newpromo.save();

    res.status(201).json({
      success: true,
      message: "Promo added successfully",
      data: newpromo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add promo",
      error: error.message,
    });
  }
};

const getallpromo = async (req, res) => {
  try {
    const promos = await promoModel.find({});
    return res.status(200).json({ success: true, data: promos });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to get promo",
      error: error.message,
    });
  }
};

const updatepromo = async (req, res) => {
  try {
    const { promoId, promoCode, discount, expiryDate, isActive, discountType } =
      req.body;

    const updatedPromo = await promoModel.findByIdAndUpdate(
      promoId,
      {
        promoCode,
        discount,
        expiryDate,
        isActive,
        discountType,
      },
      { new: true }
    );

    if (!updatedPromo) {
      return res.status(404).json({
        success: false,
        message: "Promo not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Promo updated successfully",
      data: updatedPromo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update promo",
      error: error.message,
    });
  }
};

const deletepromo = async (req, res) => {
  try {
    const promo = await promoModel.findOneAndDelete({
      promoCode: req.body.promoCode,
    });
    return res.status(200).json({ success: true, message: "Promo deleted successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete promocode",
      error: error.message,
    });
  }
};

const checkpromoandgetdetails = async (req, res) => {
  try {
    const promo = await promoModel.findOne({ promoCode: req.body.promoCode });
    if (promo) {
      return res.status(200).json({ success: true, data: promo });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Promo not found" });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to get promo",
      error: error.message,
    });
  }
};

export {
  addpromo,
  getallpromo,
  updatepromo,
  deletepromo,
  checkpromoandgetdetails,
};
