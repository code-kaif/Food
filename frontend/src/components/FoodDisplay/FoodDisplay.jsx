import React, { useContext, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import { FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [search, setSearch] = useState("");
  return (
    <div className="food" id="food">
      <h2>Top dishes near you</h2>
      <div className="search">
        <input
          type="text"
          placeholder="Search Foods"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>
          {search.length === 0 ? (
            <FaSearch size={24} cursor="pointer" color="white" />
          ) : (
            <FaXmark
              onClick={() => {
                setSearch("");
                console.log("Search cleared:", search); // Debugging line
              }}
              size={24}
              cursor="pointer"
              color="white"
            />
          )}
        </div>
      </div>
      <div className="food-list">
        {food_list
          .filter((item) =>
            search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search)
          )
          .map((item, index) => {
            if (category == "All" || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
          })}
      </div>
    </div>
  );
};

export default FoodDisplay;
