import React, { useState } from "react";

export default function Task3() {
  const [inputValue, setInputValue] = useState("");
  const [longestConsecutive, setLongestConsecutive] = useState(0);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function consequtive(nums) {
    if (nums.length === 0) return 0;

    let longest = 0;
    //to find unique element in array 
    let unique = new Set(nums); //time complexity O(1)
    
    //time complexity O(n)
    for(let num of unique){
        if(!unique.has(num-1)){
            let large =1;

            //time complexity O(n)
            while(unique.has(large+num)){
                large+=1
            }
            longest = Math.max(longest,large);
        }
      }
    
    return longest;

    //overall time and Space complexity O(n)
  }

  //i have split the data inside input field on basis of white space so data in input field should be 1 2 3 44 5 format
  function handleData() {
    let arr = inputValue
      .split(' ')
      .map(num => parseInt(num.trim(), 10))
      .filter(num => !isNaN(num));
      
    let res = consequtive(arr);
    setLongestConsecutive(res);
  }

  return (
    <div className="flex items-center flex-col gap-10">
      <div className="flex gap-5 mt-5 w-full items-center justify-center ">
        <input
          type="text"
          placeholder="Enter Number Seperated by whiteSpace (e.g: 1 2 3 4 55 6)"
          value={inputValue}
          onChange={handleInputChange}
          className="px-4 py-2 border-2 border-gray-300 w-[30%] rounded-md"
        />
        <button
          className=" bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleData}
        >
          Find
        </button>
      </div>
      <div className="border-2 border-black rounded-md p-10 flex items-center justify-center h-[30vh] w-[30vh] flex-col">
        <h1>Result:</h1>
        <h1>{longestConsecutive}</h1>
      </div>
    </div>
  );
}
