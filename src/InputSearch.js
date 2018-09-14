import React from 'react';
import './InputSearch.css';




// Functional Component
// Stateless
// Dumb
// Representational
function InputSearch(props) {

    return (
        <form className = "input-search">
            <div>
                <label htmlFor="">Search user by username</label>
                <input type="text" placeholder="Enter username" onChange = { props.onHandleChange }/>
            </div>

            <button className="btn" onClick = { props.searchUserOnGithub } >Search</button>
        </form>
    );
}


export default InputSearch;