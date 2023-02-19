import React, { useEffect, useState } from "react";
import ArrayExample from "../ArrayExample/ArrayExample";
import axios from "axios";
function DataLoad() {
    const [loading, setLoading] = useState(true);
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=50')
        .then((res)=>{
            setData(res.data);
            setLoading(false)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    useEffect(()=>{
        console.log('Hello')
    },[loading])
    return (
        <>
            {loading && <p>Loading.....</p>}
            {
                data.length > 0 && data.map((ele)=>{
                    return <div key={ele.id}>
                    <img src={ele.thumbnailUrl}/>
                    <p>{ele.title}</p>
                    </div>
                })
            }
        </>
    )
}
export default DataLoad