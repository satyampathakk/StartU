const UserProfile=({img,bio})=>{
    return(
    <div><div>
        <img className="" src={img} alt="profile picture"></img></div>
        <div>
        <p>{bio}</p>
        </div>
        </div>
    )
}
export default UserProfile;