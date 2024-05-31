import React, { useEffect, useState } from "react";
import jp, { value } from "jsonpath";
import Header from "./Header"
import { Route, Routes } from "react-router-dom";
import { YMaps, Map, Polyline } from '@pbe/react-yandex-maps';
import { observer } from "mobx-react";
import { useStore } from "../stores/store";

function Creating(props) {
    const { appStore } = useStore()
    const [count, setCount] = useState([]);
    const [title, setTitle] = useState();
    const [id, setId] = useState();
    const [description, setDescription] = useState();
    const mapRef = React.useRef(null)
    const polylineRef = React.useRef(null)
    const ymaps = React.useRef(null)
    const [coord, setCoord] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null)
    const [selectedFileName, setSelectedFileName] = useState('')

    const hadleFileChange = (event) => {
        setSelectedFile(event.target.files[0])
        setSelectedFileName(selectedFile? selectedFile.name:'')
        console.log(selectedFile)
    }
    function uploadArticle() {
        const optionsGetAll = {
            method: 'GET',
        };
        fetch('https://localhost:7294/Articles/GetAll', optionsGetAll)
            .then(response => response.json())
            .then(response => setCount(jp.query(response, '$.hits.total.value')))
            .then(console.log('https://localhost:7294/Articles/searchById/' + count))
            .catch(err => console.error(err));


        // const optionsPost = {
        //     method: 'POST',
        // };
        // fetch('https://localhost:7294/Articles/GetAll', optionsPost)
        //     .then(response => response.json())
        //     .then(response => setCount(jp.query(response, '$.hits.total.value')))
        //     .then(console.log('https://localhost:7294/Articles/searchById/' + count))
        //     .catch(err => console.error(err));


    }
    function createPolyline(coords) {
        return new ymaps.current.Polyline(coords);
    }

    function addCoordMap() {
        appStore.routeLocal = [...appStore.routeLocal, coord]
        //setCoords(appStore.routeLocal)
        console.log(appStore.routeLocal)


    }
    function delCoordMap() {
        console.log(appStore.routeLocal)

    }
    return (
        <div className="Creating">
            <div class="creating-name">
                <p>Название</p>
                <input type="text" class="name-field" onChange={(e) => setTitle(e.target.value)}></input>
            </div>

            <div class="creating-description"></div>
            <p>Описание</p>
            <textarea type="text" class="description-field" onChange={(e) => setDescription(e.target.value)}></textarea>
            <div>
                <div className="file-input-container">
                    <div className="file-input-label">
                    <img class = "creating-download-img" src="https://cdn.icon-icons.com/icons2/2153/PNG/512/round_download_icon_132793.png"></img>
                        {/* <span>{selectedFileName || 'Выберите файл'}</span> */}
                        <input type="file" onChange={hadleFileChange} className="file-input" />
                    </div>
                </div>

            </div>

            <div class="creating-map">
                <p>Введите координату точки в формате: 55.55, 33.33</p>
                <input type="text" class="rout-field" onChange={(e) => setCoord(e.target.value.split(',').map((c) => parseFloat(c)))}></input>
                <button class="map-check-button" onClick={() => delCoordMap()}>Удалить последнюю координату</button>
                <button class="map-check-button" onClick={() => addCoordMap()}>Добавить точку</button>
                <ul>
                    {
                        appStore.routeLocal.map((oneCoord) => {
                            console.log(oneCoord)
                            return (<li>{oneCoord[0]}, {oneCoord[1]}</li>)
                        })
                    }
                </ul>

                <YMaps>
                    <div>
                        <Map defaultState={{
                            center: [55.72, 37.44],
                            zoom: 10,

                        }}
                            width={700} height={500}
                            onLoad={(ymapsInstance) => (ymaps.current = ymapsInstance)}
                            instanceRef={mapRef} >
                            <Polyline
                                geometry={appStore.routeLocal}

                                options={{
                                    balloonCloseButton: false,
                                    strokeColor:  "#ff0000",
                                    strokeWidth: 4,
                                    strokeOpacity: 0.5,
                                }}
                            />
                        </Map>
                    </div>
                </YMaps>

            </div>

            <div>
                <button onClick={() => uploadArticle()} class="creating-button">Опубликовать</button>
            </div>

        </div>
    )
}

export default observer(Creating);