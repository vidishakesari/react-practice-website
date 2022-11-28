
import React,{ useState } from "react";

const SearchResult = () => {
const [img,setimg]=useState();
const photo=`https://api.unsplash.com/search/photos?page=1&query=${item}&client_id=WPaH1QwcuCwGTjq0orvP1zpsH7aDo8Lc_Mjmael4md4`;

     
    return(
        <>
            <img src={photo} alt="vidisha"/>
        </>
    )
}

export default SearchResult;