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
    },[])

return(
    <div>
    {data?data.map((item)=>{<Card key={item.pk}{...item}></Card>}):<h1 >Loading...</h1>}
    <h1 >Hello guys it is me satyam</h1>
    </div>
)
}
export default Home