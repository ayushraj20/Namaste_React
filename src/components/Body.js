import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  const [listofRes, setListofRes] = useState(resList);

  //   we can also write line 6 as below 3 lines both are same (we are destucturing it on the fly)
  //   const arr = useState(resList);
  //   const listofRes = arr[0];
  //   const setListofRes = arr[1];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRes.filter(
              (res) => res.data.avgRating > 4
            );

            setListofRes(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRes.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
