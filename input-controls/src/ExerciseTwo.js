import React, { useRef, useState } from 'react';

const ExerciseTwo = () => {
    const firstName = useRef();
    const lastName = useRef();

    const [display, setDisplay] = useState('');

    const updateDisplay = () => {
        setDisplay(firstName.current.value + " " + lastName.current.value);
    }

    return(
        <div>
            <span> Hello, {display}! </span>
            <div>
                <input type='text' ref={firstName}/>
                <input type='text' ref={lastName}/>
                <button onClick={updateDisplay}>
                    Submit!
                </button>
            </div>
        </div>
    );
}

export default ExerciseTwo;