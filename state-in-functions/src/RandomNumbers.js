import React, { useState } from 'react';

function RandomNumbers() {
    const [numbers, setNumbers] = useState([]);

    function addNumber() {
        setNumbers([
            ...numbers,
            Math.random()
        ])
    }
    return(
        <div>
            <ul>
                {numbers.map( number => <li>{number}</li>)}
            </ul>
            <button onClick={addNumber}>Hit Me!</button> 
        </div>
    );
}

export default RandomNumbers;