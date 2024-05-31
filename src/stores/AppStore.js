import {makeAutoObservable} from "mobx"

export default class AppStore{
    routeLocal = [];
    constructor(){
        makeAutoObservable(this)
    }
}