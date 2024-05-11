import SingleVideoPlayer from '../SingleVideoPlayer'
import Videos from '../Videos';
const PlayerLayout=({pk})=>{
    return(
    <div>
        <h1>Player Layout</h1>
        <SingleVideoPlayer videoId={pk}></SingleVideoPlayer>
        <Videos></Videos>
    </div>)
}
export default PlayerLayout;
//add CSS and make design like youtube where player and suggestion is showed 
