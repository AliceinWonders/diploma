import React from "react";
import Post from "./Post";
import { NavLink, Route, Routes } from "react-router-dom";

function PostList() {
    
    return( 
        <div className="PostList">
            <ul>
                <li>
                    <Post></Post>
                </li>
                <li>
                    <Post></Post>
                </li>
                <li>
                    <Post></Post>
                </li>
            </ul>
         </div>)
                          
}

export default PostList;
