import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import ExerciseOne from './ExerciseOne';
import ExerciseTwo from './ExerciseTwo';
import ExerciseThree from './ExerciseThree';

const InputExample = () => {
    const [text, setText] = useState('');
    
    const handleChange = event => {
        let text = event.target.value;
        setText(
            text.replace(/[0-9]/g, '')
        );
    };

    return (
        <input
            type='text'
            value={text}
            onChange={handleChange}
        />
    );
}

const RefInput = () => {
    const input = useRef();

    const showValue = () => {
        console.log(input);
        alert(`Input contains: ${input.current.value}`);
    };

    return (
        <div>
            <input type='text' ref={input} />
            <button onClick={showValue}>
                Alert the Value!
            </button>
        </div>
    );
};

ReactDOM.render(<ExerciseThree/>, document.querySelector('#root'));