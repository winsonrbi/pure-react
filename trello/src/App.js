import React from 'react';
import PropTypes from 'prop-types';
import ListCard from './ListCard';

function App({ lists }) {
    let sublists = [];
    sublists = lists.map(card => 
        <ListCard key={card.id} card={card}/>    
    )
    return(
        <div>
            {sublists}
        </div>
    );
}

App.propTypes = {
    lists: PropTypes.array.isRequired
}
export default App;