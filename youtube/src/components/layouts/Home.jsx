import { useEffect, useState } from 'react'
import Card from '../Card'
import axios from 'axios'
const Home=()=>{

    const [data,setData]=useState(false)
    useEffect(()=>{
        async function send(){
            const response =await axios.get(url)
            setData([...response.data])
        }
        send()
    },[url])

return(
    <div>
        {data?<Loading></Loading>:data.map((item)=>{<Card key={item.pk}{...item}></Card>})}
    </div>
)
}
export default Home