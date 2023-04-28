import React from "react";
import Header from "./Header"
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Creating from "./Creating";
import { Profile } from "./Profile";

function MainPage() {
    
    return( 
        <div className="MainPage">
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/main" element={<MainPage />}/>
                <Route path="/creating" element={<Creating />}/>
                <Route path="/profile" element={<Profile />}/>
            </Routes>
         </div>)
                          
}

export default MainPage;
