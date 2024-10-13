import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {
  const url = "http://localhost:4000";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      console.log(response.data);
      setList(response.data.food);
      console.log(list)
    } catch (error) {
      toast.error(error);
    }
  };

  const removeFood = async(foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
      await fetchList();
      toast.success("Food Removed Successfully");
    } catch (error) {
      toast.error("Cannot Remove food")
    }
   
  }

  useEffect(()=>
  {
    fetchList();
  },[])

  useEffect(() => {
    console.log("Updated list state:", list);
  }, [list]);
  
  return (
  <div className="list add flex-col">
    <p>Food List</p>
    <div className="list-table">
      <div className="list-table-format title">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b>Action</b>
      </div>
      {list.map((item,index)=>{
        return (
          <div key={index} className="list-table-format">
            <img src={item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <p onClick={()=>removeFood(item._id)} className="cursor">X</p>
          </div>
        )
      })}
    </div>
  </div>
  )
};

export default List;
