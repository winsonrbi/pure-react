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
    },
    cards: [
        {
            id: 1,
            title:'DIY - Tips Tricks Idea Repair',
            pins: 6207,
            pic1: 'https://i.pinimg.com/170x/98/0a/fe/980afeced8ffecd9ae795e6026c2a656.jpg',
            pic2: 'https://i.pinimg.com/170x/18/e4/7e/18e47e4af00e900ad718580059a3c746.jpg',
            pic3: 'https://i.pinimg.com/170x/3c/01/8b/3c018b715b37e6cbadaf7810da833e88.jpg',
            pic4: 'https://i.pinimg.com/170x/3c/01/8b/3c018b715b37e6cbadaf7810da833e88.jpg',
        },
        {
            id: 2,
            title:'DIY - Tips Tricks Idea Repair',
            pins: 6207,
            pic1: 'https://i.pinimg.com/170x/98/0a/fe/980afeced8ffecd9ae795e6026c2a656.jpg',
            pic2: 'https://i.pinimg.com/170x/18/e4/7e/18e47e4af00e900ad718580059a3c746.jpg',
            pic3: 'https://i.pinimg.com/170x/3c/01/8b/3c018b715b37e6cbadaf7810da833e88.jpg',
            pic4: 'https://i.pinimg.com/170x/3c/01/8b/3c018b715b37e6cbadaf7810da833e88.jpg',
        },
        {
            id: 3,
            title:'DIY - Tips Tricks Idea Repair',
            pins: 6207,
            pic1: 'https://i.pinimg.com/170x/98/0a/fe/980afeced8ffecd9ae795e6026c2a656.jpg',
            pic2: 'https://i.pinimg.com/170x/18/e4/7e/18e47e4af00e900ad718580059a3c746.jpg',
            pic3: 'https://i.pinimg.com/170x/3c/01/8b/3c018b715b37e6cbadaf7810da833e88.jpg',
            pic4: 'https://i.pinimg.com/170x/3c/01/8b/3c018b715b37e6cbadaf7810da833e88.jpg',
        },
        {
            id: 4,
            title:'DIY - Tips Tricks Idea Repair',
            pins: 6207,
            pic1: 'https://i.pinimg.com/170x/98/0a/fe/980afeced8ffecd9ae795e6026c2a656.jpg',
            pic2: 'https://i.pinimg.com/170x/18/e4/7e/18e47e4af00e900ad718580059a3c746.jpg',
            pic3: 'https://i.pinimg.com/170x/3c/01/8b/3c018b715b37e6cbadaf7810da833e88.jpg',
            pic4: 'https://i.pinimg.com/170x/3c/01/8b/3c018b715b37e6cbadaf7810da833e88.jpg',
        },
        {
            id: 5,
            title:'DIY - Tips Tricks Idea Repair',
            pins: 6207,
            pic1: 'https://i.pinimg.com/170x/98/0a/fe/980afeced8ffecd9ae795e6026c2a656.jpg',
            pic2: 'https://i.pinimg.com/170x/18/e4/7e/18e47e4af00e900ad718580059a3c746.jpg',
            pic3: 'https://i.pinimg.com/170x/3c/01/8b/3c018b715b37e6cbadaf7810da833e88.jpg',
            pic4: 'https://i.pinimg.com/170x/3c/01/8b/3c018b715b37e6cbadaf7810da833e88.jpg',
        },
        {
            id: 6,
            title:'DIY - Tips Tricks Idea Repair',
            pins: 6207,
            pic1: 'https://i.pinimg.com/170x/98/0a/fe/980afeced8ffecd9ae795e6026c2a656.jpg',
            pic2: 'https://i.pinimg.com/170x/18/e4/7e/18e47e4af00e900ad718580059a3c746.jpg',
            pic3: 'https://i.pinimg.com/170x/3c/01/8b/3c018b715b37e6cbadaf7810da833e88.jpg',
            pic4: 'https://i.pinimg.com/170x/3c/01/8b/3c018b715b37e6cbadaf7810da833e88.jpg',
        },
    ]
} 
ReactDOM.render(<App profile={profile}/>, document.querySelector('#root'));