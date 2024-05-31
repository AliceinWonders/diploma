import React, { useEffect, useState } from "react";
import Header from "./components/Header"
import PostList from "./components/PostList";
import { Route, Routes } from "react-router-dom";
import Creating from "./components/Creating";
import Profile from "./components/Profile";
import MainPage from "./components/MainPage";
import FullPost from "./components/FullPost";
import jp from "jsonpath"

function App(){
    const [posts, setPosts] = useState([]);
    function searchPost(content) {
        const options = {
            method: 'GET',
        };
        
        fetch('https://localhost:7294/Articles/SearchByContent/"' + content + '"', options)
            .then(response => response.json())
            .then(response => setPosts(jp.query(response, '$.hits.hits[*]')))
            .then(response => console.log("RECEIVED RESPONSE"))
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
 return(
    <>
        <Header mySearchPost={searchPost} />
        <Routes>
            <Route path="/creating" element={<Creating />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/search" element={<PostList posts={posts}/>} />
            <Route path="/post/:id" element={<FullPost/>}/>
        </Routes>
 </>)   
}
export default App;