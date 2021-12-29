import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import ListCard from './ListCard';

function App({ lists }) {
    let sublists = [];
    sublists = lists.map(card => 
        <ListCard key={card.id} card={card}/>    
    )
    return(
        <div className='app-container'>
            {sublists}
        </div>
    );
}

App.propTypes = {
    lists: PropTypes.array.isRequired
}
export default App;