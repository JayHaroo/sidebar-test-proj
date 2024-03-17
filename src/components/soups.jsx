import React, { useState, useEffect } from "react";
import soupData from "./json/soups.json";

function Soups() {
  let [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    if (soupData && soupData.soup_types) {
      setMenuItems(soupData.soup_types);
    }
  }, []);

  return (
    <>
      <div className="pl-3 pt-3 text-4xl">Soups Available</div>
      <div className="line-1 border-t-2 ml-3 mt-1 mb-1 w-[80%] border-black"></div>
      {menuItems.map((menuItem, index) => (
        <div className="pl-3 pt-1" key={index}>
          <span>{menuItem.name}</span>
        </div>
      ))}
    </>
  );
}

export default Soups;
