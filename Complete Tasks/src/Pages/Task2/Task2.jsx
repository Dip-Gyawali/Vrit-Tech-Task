import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Task2() {
  const [userinfo, getUSerinfo] = useState([]);
  const apiUrl = " https://jsonplaceholder.typicode.com/users";

  async function getData() {
    let res = await axios.get(apiUrl);
    console.log(res);
    getUSerinfo(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 class="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
        API Test
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-5">
        {userinfo.map((ele, index) => (
          <div
            className="flex flex-col gap-2 border-2 border-black rounded-xl p-5"
            key={index}
          >
            <h1>
              Id: <span className="font-bold">{ele.id}</span>
            </h1>
            <h1>
              Name : <span className="font-bold">{ele.name}</span>
            </h1>
            <h1>
              Email: <span className="font-bold">{ele.email}</span>
            </h1>
            <h1>
              Phone: <span className="font-bold">{ele.phone}</span>
            </h1>
            <h1>
              Address : <span className="font-bold">{ele.address.city}</span>
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
