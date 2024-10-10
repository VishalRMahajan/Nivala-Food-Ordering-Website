import React, { useContext, useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Home = () => {
  const [category, setCategory] = useState("Maharashtra");
  const { getTotalItemsCount } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />

      {getTotalItemsCount() > 0 ? (
        <div className="sticky-cart-button">
          <button
            onClick={() => navigate("/cart")}
          >
            <FaShoppingCart fontSize="1.5em" />
          </button>
          <div className={getTotalItemsCount() === 0 ? "" : "dot"}>
            {getTotalItemsCount() === 0 ? "" : getTotalItemsCount()}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
