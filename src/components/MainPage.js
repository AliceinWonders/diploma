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
        fetch('https://localhost:7294/Articles/GetAll', options)
            .then(response => response.json())
            .then(response => setPosts(jp.query(response, '$.hits.hits[*]')))
            .catch(err => console.error(err));
    }, [])
    //console.log(posts)
        return (
            <div className="MainPage">
                <div className="MainPageBody">
                    <PostList posts={posts} />
                </div>
            </div>
        )
}

export default MainPage;
