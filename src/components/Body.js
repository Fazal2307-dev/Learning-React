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
function filterData(searchInput,restraunList){
  const filterData = restraunList.filter((restraunt)=>restraunt.info.name.includes(searchInput));
return filterData;
}
// no key(never use) <<<<<<<<<<  index key(last option) << unique key
const Body =() =>{
  const [restrauntList,setRestrauntList]=useState(restrautList)
  const [searchInput,setSearchInput] = useState("");
 
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
 
    <button className="btn" 
      onClick={()=>{
     const data= filterData(searchInput,restrauntList);
     setRestrauntList(data);

    }}>Search</button>
  </div>
    <div className="body">
      {
       restrauntList.map((restaurant)=>{
          return <RestaurntCard {...restaurant.info} key={restaurant.info.id}/>
        })
      }
    </div>
    </>
)}
export default Body;