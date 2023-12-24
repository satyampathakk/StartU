import { useEffect, useState } from 'react'
import Card from '../Card';
import axios from 'axios'
const Home=()=>{

    const [data,setdata]=useState(false)
    useEffect(()=>{
        async function send(){
            const response =await axios.get(url)
            setdata([...response.data])
        }
        send()
    },[url])

return(
    <div>
        {data?<h1>Loading...</h1>:data.map((item)=>{<Card key={item.pk}{...item}></Card>})}
    </div>
)
}
export default Home