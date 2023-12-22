const Post=({username})=>{
    return(<div>
        <div>
        <h1>{username}</h1>
        <img src={img} alt="img"></img>
        <LikeButton></LikeButton>
        </div>
    </div>)
}
export default Post;