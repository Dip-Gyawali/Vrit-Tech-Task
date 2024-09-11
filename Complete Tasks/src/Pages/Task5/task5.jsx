import React, { useState } from "react";

export default function Task5() {
  const [inputValue, setInputValue] = useState("");
  const [smallNum, setSmallNum] = useState([]);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function countSmaller(nums) {
    if (nums.length === 0) return [];

    const result = [];
    const sorted = [];

    //time complexity O(n)
    for (let i = nums.length - 1; i >= 0; i--) {
      let left = 0,
        right = sorted.length;

        //time complexity O(log K) since its sorted array
      while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (sorted[mid] < nums[i]) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }

      result[i] = left;
      //worst case O(n)
      sorted.splice(left, 0, nums[i]);
    }

    return result;

    //time complexity O(n log n) space complexity O(n)
  }

  function handleData() {
    const arr = inputValue
      .split(" ")
      .map((num) => parseInt(num.trim(), 10))
      .filter((num) => !isNaN(num));

    const res = countSmaller(arr);
    setSmallNum(res);
  }

  return (
    <div className="flex items-center flex-col gap-10">
      <div className="flex gap-5 mt-5 w-full items-center justify-center ">
        <input
          type="text"
          placeholder="Enter Numbers Separated by WhiteSpace (e.g: 1 2 3 4 55 6)"
          value={inputValue}
          onChange={handleChange}
          className="px-4 py-2 border-2 border-gray-300 w-[30%] rounded-md"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleData}
        >
          Find
        </button>
      </div>
      <div className="border-2 border-black rounded-md p-10 flex items-center justify-center h-[30vh] w-[30vh] flex-col">
        <h1>Result:</h1>
        <h1>{smallNum.join(" ")}</h1>
      </div>
    </div>
  );
}
