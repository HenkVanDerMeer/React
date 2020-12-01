import React from 'react';

const person = (props) =>  {
    return (
        <div>
            <p>Test person, name = {props.name}</p>
            <p><i>{props.children}</i></p>
        </div>
    );
}

export default person;
