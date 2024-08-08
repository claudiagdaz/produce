function SearchBar({ 
    filterText, 
    availableOnly, 
    onFilterTextChange,
    onAvailabilityChange
  }) {

    function handleTextChange(event) {
        onFilterTextChange(event.target.value)
    }

    function handleCheckboxChange(event) {
        onAvailabilityChange(event.target.checked)
    }

    return (
        <div className="search-bar">
            <form className="search-bar form" >
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={filterText} 
                    onChange={handleTextChange}/>
                    <span>You typed {filterText}</span>
                <label>
                <input 
                    type="checkbox" 
                    checked={availableOnly} 
                    onChange={handleCheckboxChange}/>
                    {' '} Only show available products
                </label>
            </form>
        </div>
    )
}

export default SearchBar;