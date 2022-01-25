import axios from "axios";
import React , {useEffect,useState} from 'react'
import Cardo from "./cardo";
import {Spinner} from "react-bootstrap"
function lisetUeser() {



// eslint-disable-next-line react-hooks/rules-of-hooks
const [user,setUesrs] = useState ([])
// eslint-disable-next-line react-hooks/rules-of-hooks
const [loading, setLoading] = useState(true)

// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
 
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>setUesrs(res.data))
    .then (setLoading(false))
    .catch((err) =>console.log(err))

},[])





    return (
        <div>
         {
             loading ? <Spinner animation="border" /> :
             user.map(users => <Cardo users={users}/> )
         }   
        </div>
    )
}

export default lisetUeser
