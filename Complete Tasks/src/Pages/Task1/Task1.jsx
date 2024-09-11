import React, { useState, useEffect } from "react";
import datas from "./data.json";

export default function Task1() {
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState(datas);
  const [loading, setLoading] = useState(false);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  //this use effect is used for debounce which means when user stops typing for 300ms then only update state
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const filtered = datas.filter((ele) => {
        return (
          search.trim() === "" ||
          ele.category.toLowerCase() === search.toLowerCase()
        );
      });
      setFilteredItems(filtered);
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        value={search}
        placeholder="Enter Category (e.g: Furniture, Electronics)"
        className="w-full md:w-96 px-4 py-2 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-500 text-gray-800 mt-5"
        onChange={handleSearch}
      />

      {loading ? (
        <div className="mt-5">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
          {filteredItems.map((ele, index) => (
            <div
              className="flex flex-col gap-3 items-center border-black p-5 border-2 rounded-lg shadow-lg"
              key={index}
            >
              <img
                src={ele.imageURL}
                alt={ele.name}
                className="h-32 w-32 object-cover"
              />
              <hr className="w-full border-t-2 border-gray-300 my-2" />
              <h1 className="text-xl font-semibold">{ele.name}</h1>
              <div className="flex justify-between w-full p-2">
                <h1>
                  Price: <span className="font-bold">Rs.{ele.price}</span>
                </h1>
                <h1>
                  Stock: <span className="font-bold">{ele.stock}</span>
                </h1>
              </div>
              <p className="text-center text-gray-600">{ele.description}</p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                Click
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
