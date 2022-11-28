import React from "react";
import { NavLink } from "react-router-dom";
const Menu = () => {
    return(
       <>
       <div className="navSet">
       
       <NavLink to="/About/useParams/useEffect" className="active_class">About</NavLink>
        <NavLink   to="/"  className="active_class">StateWise </NavLink>
        <NavLink   to="/Search"  className="active_class">Search</NavLink>
        <NavLink  to="/PokemonApi"   className="active_class" >Pokemon Character</NavLink>
        <NavLink  to="/PokemonApi/Name"   className="active_class"   >Name</NavLink>
        
        
        </div>
        
        {/* <a href="/" >StateWise</a>&nbsp;&nbsp;&nbsp;
        <a href="/PokemonApi" >Pokemon Character</a> */}
        
       </>
    );

}
export default Menu;