import React,{useState ,useEffect} from "react";

const Search = () => {

    const [item,setitem]=useState();
     //const [img ,setimg]=useState("");
   
     
    // 
//         const actualdata= await res.json();
//         console.log(actualdata.results);

//         setimg(actualdata.results);

        
//    }
  

//     useEffect(() => {
//         fetchRequest();
//       }, []);


     

    const getValue = (event) =>{
      console.log(event.target.value);
        setitem(event.target.value);

    }

    return(
        <>
        <center>
         <input type="text" placeholder="Enter what you want" className="setSearch  mt-4" onChange={getValue} value={item}/>
         <img src={img} alt="vidisha"/>
         </center>


         {/* {img.map((val) => {
         return (
      <>
        <img
          className="col-3 img-fluid img-thumbnail"
          src={val.urls.small}
          alt="val.alt_description"
        />
      </>
    );
  })} */}
         
         
        </>
    );
    }
export default Search;