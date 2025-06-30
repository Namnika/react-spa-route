import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function SearchPage (){
    const [searchParams] = useSearchParams()
    const query = searchParams.get
}