const Title = () => (
    <a href="/">
<img  className="logo"
alt="logo" 
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51Fg8ECaMCb6T2yAd4CgUjy_hu7Zk1OKEZw&s">
</img>
</a>
);
const Header = () =>{
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


export default Header;