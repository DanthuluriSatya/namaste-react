import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
  const [btnNameReact,setBtnNameReact] =useState("Login");
  const onlineStatus=useOnlineStatus();
  console.log("Header render");
  useEffect(()=>{
    console.log("useEfect called");
  });
    return (
      <div className="header">
       <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
       </div>
       <div className="nav-items">
        <ul>
          <li>Online Status:{onlineStatus?"✅" :"🔴"}</li>
          <li>Home</li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button className="login" 
          onClick={()=>{
            btnNameReact==="Login"?
            setBtnNameReact("Logout"): setBtnNameReact("Login");
           
          }}>{btnNameReact}</button>
        </ul>
        </div>
      </div>
    );
  };
export default Header;

