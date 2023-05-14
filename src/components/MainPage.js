import React from "react";
import Header from "./Header"
import PostList from "./PostList";
import { Route, Routes } from "react-router-dom";
import Creating from "./Creating";
import { Profile } from "./Profile";
import { DropdownButton } from "react-bootstrap";

function MainPage() {
    
    return( 
        <div className="MainPage">
            <Header />
            <PostList/>
         </div>)
                          
}

export default MainPage;
