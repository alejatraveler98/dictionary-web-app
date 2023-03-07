import { useContext, useState } from "react"
import { WordContext } from "../context/wordsContext";
import IconSearch from "./Icons/IconSearch";

const Search = () => {
    const [search, setSearch] = useState('');
    const { searchWords } = useContext(WordContext)
    const [ error, setError] = useState(null)
    const handleChange = async (e) => {
        e.preventDefault();
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(search.length > 0 ){
            searchWords({ search })
            setError(null)
            return
        }
        setError(`Whoops, can't be empty...`)
    }
    return (
        <div className="main-search">
            <form className="form-search" onSubmit={e => handleSubmit(e)}>
                <div className="form-search-group">
                    <input
                        type="text"
                        name="nameWord"
                        id="nameWord"
                        placeholder="Search for any word"
                        className={`search-input ${error && 'error' } `}
                        onChange={(e) => handleChange(e)}
                    />
                    <IconSearch/>
                </div>
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    )
}

export default Search