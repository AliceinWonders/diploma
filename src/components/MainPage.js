import React from "react";
import Header from "./Header"
import PostList from "./PostList";
import { Route, Routes } from "react-router-dom";
import Creating from "./Creating";
import Profile from "./Profile";
import { DropdownButton } from "react-bootstrap";

function MainPage() {
    
    return( 
        <div className="MainPage">
            <Header />
            <Routes>
                <Route path="/creating" element={<Creating />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/main" element={<MainPage />}/>
            </Routes>
            <div className="MainPageBody">
            <PostList/>
            </div>
         </div>)
                          
}

export default MainPage;
