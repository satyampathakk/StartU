const Search=()=>{
    return(
    <div>
    <input type="text" placeholder="Search" onChange={(e) => onSearch(e.target.value)}/>
    <button onClick={() => console.log('Search button clicked')}>Search</button>
    </div>
    )
}