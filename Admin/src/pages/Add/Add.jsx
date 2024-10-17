import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({url}) => {
  
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Maharashtra",
    type: "Veg",
    serve: "",
    image: "",
  });

  const onchangehandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onsubmitHandler = async (event) => {
    event.preventDefault();
    const jsonData = {
      name: data.name,
      description: data.description,
      price: Number(data.price),
      category: data.category,
      serve: data.serve,
      type: data.type,
      image: data.image,
    };
    try {
      const response = await axios.post(`${url}/api/food/add`, jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setData({
        name: "",
        description: "",
        price: "",
        category: "Maharashtra",
        type: "Veg",
        serve: "",
        image: "",
      });
      toast.success(response.data.message);
    } catch (error) {
      toast.error(response.data.message);
      console.log(error);
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onsubmitHandler}>
        <h2 className="Heading">Add Items</h2>

        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            name="name"
            onChange={onchangehandler}
            value={data.name}
            type="text"
            placeholder="Enter Product Name"
            required
          />
        </div>

        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            name="description"
            onChange={onchangehandler}
            value={data.description}
            placeholder="Enter Product Description"
            rows="6"
            required
          />
        </div>

        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <input
            type="url"
            onChange={onchangehandler}
            value={data.image}
            placeholder="Enter Your Image Url"
            name="image"
            required
            className="urlinput"
          />
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>State:</p>
            <select
              onChange={onchangehandler}
              value={data.category}
              name="category"
              placeholder="Enter Url"
            >
              <option value="Maharashtra">Maharashtra</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="West Bengal">West Bengal</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Rest of India">Rest of India</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <p>Price</p>
            <input
              onChange={onchangehandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="Enter Price"
              required
            />
          </div>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Type:</p>
            <select onChange={onchangehandler} value={data.type} name="type">
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <p>Serve</p>
            <input
              onChange={onchangehandler}
              value={data.serve}
              type="text"
              name="serve"
              placeholder="Serve"
              required
            />
          </div>
        </div>

        <button type="submit" className="add-button">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Add;
