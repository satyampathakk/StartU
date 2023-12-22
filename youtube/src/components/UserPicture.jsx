import LikeButton from "./LikeButton"

const UserPicture =({img,caption,setLike})=>{
    return (
        <div className="user-picture">
            <img src={img} alt="loading..." />
            <p>{caption}</p>
            <LikeButton/>
        </div>
    )
}
export default UserPicture;