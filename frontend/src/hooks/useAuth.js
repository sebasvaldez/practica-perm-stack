import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"


export const useAuth=()=>{
   const context = useContext(AuthContext)

   if(!context){
    throw new Error("useAuth deberia estar dentro del proveedor AuthContext")
   }
    return context

}