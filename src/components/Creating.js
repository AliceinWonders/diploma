import React from "react";
import Header from "./Header"
import { Route, Routes } from "react-router-dom";

function Creating(props) {

    return(
        <div className="Creating">
            <div class = "creating-name">
                <p>Название</p>
                <input type="text" class = "name-field"></input>
            </div>

            <div class = "creating-description"></div>
                <p>Описание</p>
                <input type="text" class = "description-field"></input>
            <div>
                <p>Добавить фото</p>
                <button class = "creating-photo-button"><img class = "creating-photo-img" src= "https://cdn.icon-icons.com/icons2/1674/PNG/512/download_111133.png"></img></button>  

            </div>
            
            <div class = "creating-map">
                <p>Маршрут</p>
            </div>

            <div class = "creating-button">
                <button>Опубликовать</button>
            </div>
            
        </div>
    )
}

export default Creating;