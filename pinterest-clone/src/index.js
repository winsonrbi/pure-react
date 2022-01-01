import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const profile = {
    profileHeader: {
        name: 'Aviation Explorer',
        imgSrc: 'https://i.pinimg.com/280x280_RS/7b/eb/40/7beb401620fabf62dc1841484eb47844.jpg'
    },
    profileSubMenu: {
        numBoards: 37,
        numPins: 8905,
        numLikes: 186,
        numFollowers: 8902,
        numFollowing: 1803,
    }
} 
ReactDOM.render(<App profile={profile}/>, document.querySelector('#root'));