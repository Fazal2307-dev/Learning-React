
import React from "react";
import ReactDOM from "react-dom/client";

 /**
     * Header
     * -Logo
     * -Nav items
     * -Cart
     * Body
     *  -SearchBar
     *  -RestaurntList
     *      -RestaurntCard
     *           -Image
     *           -Name
     *           -Rating
     *           -cusines
     * Footer
     * -Links
     * -Copywrites
     */

const Title = () => (
    <a href="/">
<img  className="logo"
alt="logo" 
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51Fg8ECaMCb6T2yAd4CgUjy_hu7Zk1OKEZw&s">
</img>
</a>
);

const HeaderComponent = () =>{
    return ( 
        <div className="header">
           <Title />
           <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Cart</li>
                    
                </ul>
            </div>        
        </div>
)};

const burgerKing ={
    name:"Burger King",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/4/22/0438b481-ff18-48f2-b8c5-56297101c40f_8eab0d79-e411-4ff6-9b85-4b02aa637cd9.jpg",
    cusines:["Burger,American"],
    rating:"4.2", 
}

const RestaurntCard = () =>{
    return(
        <div className="card">
            <img  alt ="Res Card" src={burgerKing.image}></img>
            <h2>{burgerKing.name}</h2>
            <h3>{burgerKing.cusines.join(" , ")}</h3>
            <h4>{burgerKing.rating}</h4>
            

        </div>
    )
}
const Body =() =>{
    return (
        <div className="body">
            <RestaurntCard />
            <RestaurntCard />
            <RestaurntCard />
            <RestaurntCard />
            <RestaurntCard />
            <RestaurntCard />
            <RestaurntCard />
            <RestaurntCard />
            <RestaurntCard />
            <RestaurntCard />
            <RestaurntCard />
            <RestaurntCard />
            <RestaurntCard />
            <RestaurntCard />
            <RestaurntCard />
            <RestaurntCard />
        </div>

    )
}
const Footer =() =>{
    return (
        <div className="footer">
            <h3>
               Footer
            </h3>
        </div>

    )
}
const AppLayout = () =>{
return(
<div>
    <HeaderComponent />
    <Body />
    <Footer />

</div>
   
)
}


const root = ReactDOM.createRoot(document.getElementById("root"));

// passing react element inside root
root.render(<AppLayout />);