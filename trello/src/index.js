import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const lists = [
    {
        id: 1,
        title: 'Phone Features',
        sublist: [
            'Subwoofer',
            'Non-porous, washable',
            'Wings',
            'Beveled Bezel'
        ]
    }
]

ReactDOM.render(<App lists={lists}/>, document.querySelector('#root'));