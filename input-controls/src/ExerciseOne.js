import React, { useState } from 'react';

const ExerciseOne = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleFirstName = event => {
        setFirstName(event.target.value);
    }
    const handleLastName = event => {
        setLastName(event.target.value);

    }
    return(
        <div>
            <span> Hello, {firstName} {lastName}! </span>
            <div>
                <input type='text' value={firstName} onChange={handleFirstName}/>
                <input type='text' value={lastName} onChange={handleLastName}/>
            </div>
        </div>
    );
}

export default ExerciseOne;