import React, { useState, useRef, useEffect } from 'react';
import '../stylesheets/searchbar.css';

/**
 * @param {String} searchQuery
 * @param {function} setSearchQuery 
 * @returns 
 */
export default function Searchbar(props) {    

    const {searchQuery, setSearchQuery} = props;

    function handleSearchValueChange(e) {
        setSearchQuery(e.target.value);
    }

    return (
        <input 
            className="editor-searchbar" 
            type='text' 
            value={searchQuery}
            placeholder='Search'
            onChange={() => handleSearchValueChange(e)}
        />
    )
}