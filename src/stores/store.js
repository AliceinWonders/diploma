import { createContext, useContext, } from "react"
import AppStore from "./AppStore"

export const store ={
    appStore: new AppStore
}

export const StoreContext = createContext(store)

export function useStore(){
    return useContext(StoreContext)
}