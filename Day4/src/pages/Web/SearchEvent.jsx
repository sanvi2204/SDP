import {useState} from 'react'
const SearchEvent = () => {
    const [search, setSearch] = useState('');

    return (
        <input 
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-bar"
        />
    );
};

export default SearchEvent;