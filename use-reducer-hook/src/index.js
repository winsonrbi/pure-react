import React, { useReducer, useRef } from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid';
import Room from './Room';
import KeyPad from './KeyPad';

function ShoppingList() {
    const [items, dispatch] = useReducer(reducer, []); 
    const inputRef = useRef();
    function reducer(state, action) {
       switch (action.type) {
           case 'add':
               return [
                   ...state,
                   {
                       id: uuidv4(),
                       name: action.name,
                   }
               ];
            case 'remove':
                return state.filter((_, index) => index !== action.index);
            case 'clear':
                return [];
            default:
                   return state;
       }
    }
    function handleSubmit(e) {
        e.preventDefault();
        dispatch({
            type: 'add',
            name: inputRef.current.value
        });
        inputRef.current.value = '';
    }
    return (
       <div>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} />
            </form>
            <ul>
               {items.map((item, index) => (
                   <li key={item.id}>
                       {item.name}
                       <button onClick={() => dispatch({ type: 'remove', index})}>
                           X
                       </button>
                   </li>
               ))}
            </ul>
            <div>
                <button onClick={() => dispatch({ type: 'clear'})}>
                    Clear
                </button>
            </div>
       </div>
    );
}

ReactDOM.render(<KeyPad/>, document.querySelector('#root'));