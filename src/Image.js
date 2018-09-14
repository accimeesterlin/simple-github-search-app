import React from 'react';


function Image(props) {
    return (
        <div>
            <img src={props.avatar_url} alt="" />
        </div>
    );
}

export default Image;