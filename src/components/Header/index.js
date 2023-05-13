import React from "react";
import "./css/index.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";
import HelpIcon from "@material-ui/icons/Help";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function Header() {
const user=useSelector(selectUser)
const nav=useNavigate();
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
         <Link to="/" >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/220px-Stack_Overflow_logo.svg.png"
              alt="logo"
            />
            </Link>
          <h3>Products</h3>
        </div>
        <div className="header-middle">
          <div className="header-search-container">
            <SearchIcon />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-container">    
           <Avatar style={{
            cursor: "pointer",
          }}
          onClick={() => {auth.signOut();
          nav("/auth")}}
          />
            <InboxIcon />
            <HelpIcon />        
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
