import React from 'react';

const SearchForm = props => {
    return (
        <div className="search-city">
            <h2>Szukaj miasta</h2>
            <input type="text" placeholder="Szukaj" onChange={props.search} />
        </div>
    );
}

export default SearchForm;