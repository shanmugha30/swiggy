import RestroCard from "./RestroCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

 const Body=()=>{
    //Local state variable - useState -powerful variable 
    //scope is inside the component
    const [listofRestro,setListofRestro]=useState([]);
    const [filteredList,setfilteredList]=useState([]);
    const [searchText,setSearchText]=useState([]);

    //js variable
    useEffect(()=>{
        fetchData();
    },[]);

    
    const fetchData=async() => {
         //const data= await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.6287557&lng=79.4191795&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

         //const jsondata=await data.json();
         //console.log(jsondata)
        setTimeout(()=>{
            setListofRestro(resList)
            setfilteredList(resList)
        },1000);
    }


    //conditional rendering
    

    return listofRestro.length === 0 ? <Shimmer/> : (
        <div className="body">

           

            <div className="filter">
                <input type="text" className="serach-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                 <button onClick={() => {
                    //console.log(searchText)
                    const searchList=listofRestro.filter((res) =>  (res.info.name).toLowerCase().includes(searchText.toLowerCase()) === true);
                    setfilteredList(searchList);
                 }}>Search</button>

                <button className="filter-btn" onClick={()=>{
                    const filterList=listofRestro.filter((res) => res.info.avgRating > 4.2);
                    setListofRestro(filterList);
                    }}>Top Rated</button>
            </div>
            <div className="restro-container">
                {
                    
                    filteredList.map(restaurant => <RestroCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
    );
}

export default Body;