import restrautList  from "./RestrautList";
import { IMG_CDN_URL } from "../constant";
import {useState} from "react";

const RestaurntCard = ({cloudinaryImageId,name,cuisines,avgRating,costForTwo }) =>{
return(
  <>
  
    <div className="card">
        <img  alt ="Res Card" src={IMG_CDN_URL+
            cloudinaryImageId}></img>
        <h2>{name}</h2>
        <h3>{cuisines.join(" , ")}</h3>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
    </div>
    </>
)}
// no key(never use) <<<<<<<<<<  index key(last option) << unique key
const Body =() =>{
  const [searchInput,setSearchInput] = useState();
  const [searchContant,setSearchContant] = useState("false");
return (
  <>
  <div className="search-container">
    <input type="text"
     placeholder="Search"
      value={searchInput}
      onChange = {(e)=>{
        setSearchInput (e.target.value);
      }}
      >
  </input>
  <h1>{searchContant}</h1>
    <button className="btn" onClick={()=>{
      setSearchContant("true");
    }}>Search</button>
  </div>
    <div className="body">
      {
        restrautList.map((restaurant)=>{
          return <RestaurntCard {...restaurant.info} key={restaurant.info.id}/>
        })
      }
    </div>
    </>
)}
export default Body;