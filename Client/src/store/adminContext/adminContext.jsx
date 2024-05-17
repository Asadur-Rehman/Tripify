import { createContext } from "react"

const adminContext = createContext({
    firstName: "",
    lastName: "",
    email: ""
})

export default adminContext;