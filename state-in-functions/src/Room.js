import React, { useState  } from 'react';

function Room() {
    const [light, setLight] = useState(false);

    function flipLight() {
        setLight(!light);
    }
    return(
        <div>
            <span> {light ? 'On' : 'Off'}</span>
            <button onClick={flipLight}>
                Light Switch
            </button>
        </div>
    );
}
export default Room;