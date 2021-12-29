import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

function ListCard({ card }){
    let cards_list = []
    cards_list = card.sublist.map(listItem =>
        <ListItem listItem ={listItem}/>   
    )

    return(
        <div className='list-card'>
            <h1>{card.title}</h1>
            {cards_list}
        </div>
    );
}

ListCard.propTypes = {
    sublist: PropTypes.array
}
export default ListCard;