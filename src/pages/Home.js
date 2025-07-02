import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="my-12 py-8 bg-linear-65 from-indigo-200 to-indigo-50">
        <nav className="flex justify-center gap-6 text-lg font-semibold uppercase text-gray-950">
          <Link to={"/"}>Home</Link>
          &nbsp;
          <Link to={"/about"}>About</Link>
          <Link to="/products?category=books&page=1">Go to Products</Link>
        </nav>
      </div>
      <div className="w-5xl text-lg mx-auto text-left">
        <h1>This is Home Page</h1>
        <br />
        <button
          className="cursor-pointer w-28 h-10 text-white bg-blue-400 rounded"
          onClick={() => navigate("/about")}
        >
          Go to About
        </button>
        &nbsp; &nbsp;<small>(<code>using useNavigate()</code>)</small>
      </div>
    </div>
  );
}

export default Home;
