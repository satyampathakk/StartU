import { useEffect, useState } from 'react'
import Card from '../Card';
import axios from 'axios'
const Home=()=>{

    const [data,setdata]=useState([])
    useEffect(()=>{
        async function send(){
            const response =await axios.get(url)
            setdata([...response.data])
        }
        send()
    },[])

return(
    <div>
    hello world
    {data?<h1>Loading...</h1>:data.map((item)=>{<Card key={item.pk}{...item}></Card>})}
    </div>
)
}
export default Home