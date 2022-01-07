import React,{ useReducer } from 'react';

function KeyPad() {
    const[state, dispatch] = useReducer(reducer, 'init');

    function reducer(state, action) {
        console.log(state);
        switch(state) {
            case 'init':
                if(action.number === '2') {
                    return '1';
                }
                else{
                    return 'init';
                }
            case '1':
                if(action.number === '4') {
                    return '2';
                }
                else{
                    return 'init';
                }
            case '2':
                if(action.number === '6') {
                    return '3';
                }
                else{
                    return 'init';
                }
            case '3':
                if(action.number === '5') {
                    return 'success'
                }
                else{
                    return 'init';
                }
            case 'success':
                return 'success';

            default:
                return 'init';
        }
    }

    return (
        <div>
            <div>
                <button onClick={()=> dispatch({number: '1'})}>1</button>
                <button onClick={()=> dispatch({number: '2'})}>2</button>
                <button onClick={()=> dispatch({number: '3'})}>3</button>
                <button onClick={()=> dispatch({number: '4'})}>4</button>
                <button onClick={()=> dispatch({number: '5'})}>5</button>
                <button onClick={()=> dispatch({number: '6'})}>6</button>
            </div>  
            <div>
                {state === 'init' ? <span>Start</span> :  
                (state !== 'success'? <span>{state}/4</span> : <span>Success!</span>)}
            </div>
        </div>
    );
}

export default KeyPad;