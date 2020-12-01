import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p>Eerste tekst: {props.children}</p>
            <p>Tweede tekst; username: {props.username}</p>
            <p onClick={props.click}>Change user</p>
        </div>
    );
}

export default UserOutput;
