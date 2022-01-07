import React, { useReducer } from 'react';

function Room(){
    const [level, dispatch] = useReducer(reducer, 'off');

    function reducer(state, action) {
        switch (action.type){
            case 'change':
                if (state === 'off') {
                    return 'low';
                }
                else if(state === 'low') {
                    return 'medium';
                }
                else if(state === 'medium') {
                    return 'high';
                }
                else {
                    return 'off';
                }
            
            case 'off':
                return 'off';

            default:
                return 'off';

        }
    }

    return(
        <div>
            {level}
            <button onClick={() => dispatch({type: 'change'})}>Click Me!</button>
            <button onClick={() => dispatch({type: 'off'})}>Off</button>
        </div>
    );
}

export default Room;