import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const StateWise = () => {


    const navigate=useNavigate();
    const[data,setdata]=useState([]);

    const CovidData = async () => {
         const res = await fetch('https://data.covid19india.org/data.json');

         const actualdata= await res.json();
        // console.log(actualdata.statewise);

         setdata(actualdata.statewise);
    }

    useEffect(()=>{
        CovidData();
    })

    return(

        <>
           
           <div className="container-fluid mt-3">
            <div className="main-heading">
            <h1 className="mt-2 text-center">India COVID-19 Dashboard</h1>
            </div>
           </div>

           <div className="table-responsive">
            <table className="table  table-hover ">
                <thead className="thead-dark bg-dark  ">
                    <tr >
                        <td>State</td>
                        <td>Active</td>
                        <td>Deaths</td>
                        <td>Recovered</td>
                        <td>Confirmed</td>
                        <td>Deltadeaths</td>
                        <td>Deltarecovered</td>
                        <td>LastUpdate</td>
                        
                        
                    </tr>
                </thead>
                <tbody>
                     
                     {
                        data.map((val,index)=>{
                            return(
                                <>
                            <tr key={index}>
                                
                                <td >{val.state}</td>
                                <td>{val.active}</td>
                                <td>{val.deaths}</td>
                                <td>{val.recovered}</td>
                                <td>{val.confirmed}</td>
                                <td>{val.deltadeaths}</td>
                                <td>{val.deltarecovered}</td>
                                <td>{val.lastupdatedtime}</td>
                        
                            </tr>

                            
                                </>
                            )
                        })
                     }

                   
                </tbody>
            </table>


           </div>

           <button onClick={()=>{ navigate(-1);}}>GoBack</button>
        </>
    )

}
export default StateWise;