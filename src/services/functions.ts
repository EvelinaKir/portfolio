import { instance } from "./axios"

export const ageCounter = (date: number) => {
    const today = new Date().getFullYear()
    return today - date
    
}

