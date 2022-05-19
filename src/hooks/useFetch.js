import axios from 'axios'
import { useState, useEffect } from 'react'

const useFetch = (endPoint)=> {
    const [data, setData] = useState([])

async function fetchData(){
    const response = await axios.get(endPoint)
    setData(response.data);
}

useEffect (()=> {
    try {
        fetchData();
    } catch (error) {
        console.log(error)
    }
}, [])
return data;
};

export default useFetch;