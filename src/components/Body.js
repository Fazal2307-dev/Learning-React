import restrautList  from "./RestrautList";

const RestaurntCard = ({cloudinaryImageId,name,cuisines,avgRating,costForTwo }) =>{
return(
    <div className="card">
        <img  alt ="Res Card" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
            cloudinaryImageId}></img>
        <h2>{name}</h2>
        <h3>{cuisines.join(" , ")}</h3>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
    </div>
)}
// no key(never use) <<<<<<<<<<  index key(last option) << unique key
const Body =() =>{
return (
    <div className="body">
      {
        restrautList.map((restaurant)=>{
          return <RestaurntCard {...restaurant.info} key={restaurant.info.id}/>
        })
      }
    </div>
)}
export default Body;