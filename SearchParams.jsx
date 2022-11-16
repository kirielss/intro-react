const SearchParams = () => {
    const location = "Salvador, BA";
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} placeholder="Location" />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;