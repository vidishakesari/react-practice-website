import React from "react";
import { useParams,useLocation , useNavigate} from "react-router-dom";


const About = () => {

const { info ,info1} = useParams();
    const location=useLocation();
    const navigate =  useNavigate ();
    //console.log(location.pathname);
    console.log(navigate);
const local=location.pathname;

const goToPokemonPage =() => {
    navigate("/PokemonApi"); 
}

        return (
        <>
        <div style={{ fontSize: "30px" }}>
        
        <h1>Hii this is about page.</h1>
                 
                 <h4>WelCome To {info}{info1}</h4>
          <p>The {info} hook is one of the several hooks in React router. It has been available in React router since version 5. You can use it to retrieve route parameters from the component rendered by the matching route.</p>
               
               
    
          <h4>WelCome To {info1} Page</h4>
           <p>The {info1} Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments.</p>
           </div>

           <p style={{ fontSize: "20px" }}>Hii this is my current location{local}</p>
            {local === `/About/useParams/useEffect` ? <button onClick={()=>goToPokemonPage()}>click To Go Pokemon Page</button> : null } 

           
           </>
        )      
}


export default About;

