import React from 'react';

const person = (props) =>  {
    return (
        <div>
            <p>Test person, name = {props.name}</p>
            <p>Mooi hè?</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;
