import { instance } from "./axios"
import { Dispatch } from "react"
import { AppDispatch } from "./store"

export const ageCounter = (date: number) => {
    const today = new Date().getFullYear()
    return today - date
}



const smoothLink = (navigate:any, where:string) => {
    
}