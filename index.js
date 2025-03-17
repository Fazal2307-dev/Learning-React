
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
const Body =() =>{
    return (
        <div>
            <h3>
                Body
            </h3>
        </div>

    )
}
const Footer =() =>{
    return (
        <div>
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