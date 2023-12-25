import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react'
const LikeButton=()=>{
    const [value,setLike]=useState(0)

    return(<>
        <button onClick={()=>{setLike((state)=>state+=1)}}>Like</button>
        {value % 2 === 0 ? <span style={{ color: 'red' }}>❤️</span> : <span style={{ color: 'black' }}>🖤</span>}
        </>
    )
}
export default LikeButton;
