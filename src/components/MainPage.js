import React, { useEffect, useState } from "react";
import Header from "./Header"
import PostList from "./PostList";
import { Route, Routes } from "react-router-dom";
import Creating from "./Creating";
import Profile from "./Profile";
import jp from "jsonpath"

function MainPage() {
    const [posts, setPosts] = useState([]);
        useEffect(() => {
            const options = {
                method: 'GET',
            };  
            fetch('https://localhost:44397/Articles/GetAll', options)
            .then(response => response.json())
            .then(response => setPosts(jp.query(response, '$.hits.hits[*]')))
            .catch(err => console.error(err));
        },[])
    console.log(posts)
    
    return( 
        <div className="MainPage">
            <Header />
            <Routes>
                <Route path="/creating" element={<Creating />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/main" element={<MainPage />}/>
            </Routes>
            <div className="MainPageBody">
            <PostList posts={posts}/>
            </div>
         </div>)
                          
}

export default MainPage;
