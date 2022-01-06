import React,{useState,useEffect} from 'react'

export default (url,options = null) => {
    
const [data,setData] = useState([])

const FetchDataFromApi = () => {

   return fetch(url,options)
   .then((response)=>response.json())
   .then((result)=>{
    setData(result)
    })
}


useEffect(()=>{
    FetchDataFromApi()
},[])


return [data,setData]

}