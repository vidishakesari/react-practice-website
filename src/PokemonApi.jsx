import React, { useEffect, useState } from "react";
import './index.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PokemonApi = () => {
const [num , setnum]=useState();
 const [Name,setName]=useState();
const[ moves,setmoves]=useState();
const navigate=useNavigate();

const getData = async () => {
    
const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
// console.log(res.data.name);
   setName(res.data.name);
 
 setmoves(res.data.moves.length);
}

 useEffect(()=>{
    getData();
 })

    const pokemonData = (event) => {

       setnum(event.target.value);
    }

    const GoNextPage= () =>{
        navigate("/");
    }
    return(
        <>
        <h1 className="setFont">choose Numbers Here is your Number {num}.</h1>

        <h3 className="setFont">Hi I am <span style={{color: "red"}}>{Name}</span></h3>
        <h3 className="setFont">My Moves is <span style={{color:"red"}}>{moves}</span></h3>
            <select value={num} onChange={pokemonData}>

                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="404">404</option>
                <option value="5">5</option>
            </select>
            <button onClick={GoNextPage}>GoNextPage</button>
            <button onClick={()=>{
                navigate(-1);}}>GoBack</button>
        </>
    )
}
export default PokemonApi;