const InboxUser =({username,message})=>{
return (
    <div>
    <div>
        <h1>{username}</h1>
        </div>
        <div>
            <h3>{message}</h3>
        </div>
    </div>
)
}
export default InboxUser;