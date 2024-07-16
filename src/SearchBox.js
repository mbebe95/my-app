

const SearchBox = ({searchfield, searchChange}) =>{
    return(
        <div className="pa4 tc">
            <input className="pa3 ba b--green bg-lightest-blue" type='search' placeholder="search robot" onChange={searchChange} />
        </div>
    )
} 


export default SearchBox;