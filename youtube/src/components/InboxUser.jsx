const InboxUser =({ username = "Default User", message = "No message available" })=>{
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