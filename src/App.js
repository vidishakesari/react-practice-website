import React from "react";
import StateWise from "./Component/StateWisedata/StateWise";
import "./Component/StateWisedata/Statewise.css";
import PokemonApi from './PokemonApi';
import Name from './Name';
import Error from './Error';
import {Routes,Route}from 'react-router-dom';
import Menu from './Menu';
import About from './About';
import Search from "./Search";




const App=()=>{

  return(
    <>
    
    <Menu />
      <Routes>
      {/* <Route path="/About" element={<About/>}/> */}
      <Route path="/About/:info/:info1" element={<About/>}/>
        <Route  exact  path="/" element={<StateWise/>}/>
        <Route       path="/Search"  element={<Search/>}/>
        <Route  exact  path="/PokemonApi" element={<PokemonApi/> }/>
        <Route  exact path="/PokemonApi/Name" element={<Name  name="pokemon"/>}/>
         <Route exact path="/*" element={<Error/>}/> 
        
      </Routes>

      
       {/* <StateWise/>
       <PokemonApi/> 
       <Name/> */}
    </>
  )
}

export default App;