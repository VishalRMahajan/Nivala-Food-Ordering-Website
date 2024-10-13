import foodModel from "../models/foodModel.js";
import fs from "fs";

//add food item
const addFood = async (req, res) => {
  console.log(req.body)

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
    category: req.body.category,
    serve: req.body.serve,
    type: req.body.type,
  });

  console.log(food)
  try {
    await food.save();
    res.json({ success: true, message: "Food Item Added Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to add Food Item" });
  }
};

//Getting Food List
const listFood = async (req, res) => {
  try {
    const food = await foodModel.find({});
    res.json({ success: true, food });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to fetch Food List" });
  }
};

//Remove Food Item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Item Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to delete Food"});
  }
};

export { addFood, listFood, removeFood };
