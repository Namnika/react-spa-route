import React from "react";
import { useSearchParams } from "react-router-dom";

function SearchPage (){
    const [searchParams] = useSearchParams()
    const query = searchParams.get("query")
    const page = searchParams.get("page")

    return(
        <div>
            Query: {query} on Page Number page: {page}
        </div>
    )
}

export default SearchPage