import { useState } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import "../src/app/globals.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    const hardcodedUser = {
      username: "user",
      password: "password123",
    };

    if (
      username === hardcodedUser.username &&
      password === hardcodedUser.password
    ) {
      cookie.set("token", "authenticatedUserToken", { expires: 1 });
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-[100vh] w-[100vw]">
      <div className="flex items-center flex-col p-5 rounded-xl gap-5 bg-purple-600">
        <h1 className="font-bold text-4xl text-orange-400">Login Form</h1>
        <form onSubmit={handleLogin}>
          <div className="flex items-center justify-center flex-col gap-3">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="border-2 bg-purple-500 outline-none border-none rounded-[50px] p-3 w-[20vw] text-xl placeholder:text-gray-700"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="border-2 bg-purple-500 outline-none border-none rounded-[50px] p-3 w-[20vw] text-xl placeholder:text-gray-700 "
            />
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-2xl cursor-pointer w-[20vw] text-xl">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
