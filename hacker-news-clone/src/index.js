import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const news = [
    {
        id: "1",
        title: "Northvolt assembles first lithium-ion battery cell at Swedish gigafactory",
        source: "northvolt.com",
        points: "16",
        author: "HieronymusBosch",
        publishDate: "2016-07-11 21:24:00",
        numComments: "3"
    },
    {
        id: "2",
        title: "Northvolt assembles first lithium-ion battery cell at Swedish gigafactory",
        source: "northvolt.com",
        points: "16",
        author: "HieronymusBosch",
        publishDate: "2016-07-11 21:24:00",
        numComments: "3"
    }
]
ReactDOM.render(<App news = {news}/>, document.querySelector('#root'));