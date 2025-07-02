import React from "react";
import { useSearchParams } from "react-router-dom";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "none";
  const page = searchParams.get("page") || "1";

  const handleNextPage = () => {
    const nextPage = parseInt(page) + 1; // converting string page num to int and manipulate page num
    setSearchParams({ category, page: nextPage.toString() });
  };

  return (
    <div className="w-full px-8 flex flex-col gap-y-4">
      <div className="w-5xl text-lg my-12 mx-auto text-left">
        <h1> This is Products Page</h1>
        <h2><strong>Category:</strong> {category}</h2>
        <h2><strong>Page:</strong> {page}</h2>
        <br/>
        <br/>
        <button className=" cursor-pointer w-28 h-10 text-white bg-blue-400 rounded" onClick={handleNextPage}>Next Page</button>&nbsp; &nbsp;
        (<small><code>products page num parameter is changing using useSearchParams() hook</code></small>)
      </div>
      
      
    </div>
  );
}

export default Products;
