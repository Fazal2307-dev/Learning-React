
import React from "react";
import ReactDOM from "react-dom/client";
//default import
// import Header from "./components/Header";
// named  import
import  Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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






const AppLayout = () =>{
return(
<div>
    {/* <Title /> */}
    <Header />
    <Body />
    <Footer />

</div>
   
)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<AppLayout />);