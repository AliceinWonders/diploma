import React from "react";
import Post from "./Post";
import { NavLink, Route, Routes } from "react-router-dom";

function PostList(props) {
    console.log(props.posts)
    return( 
        <div className="PostList">
            <ul>
                {
                    props.posts.map(function(onePost){
                        console.log(onePost)
                        return <Post key={onePost._id} post={onePost}></Post>
                    })
                }
            </ul>
         </div>)
                          
}

export default PostList;
