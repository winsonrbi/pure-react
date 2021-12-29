import React from 'react';
import PropTypes from 'prop-types';
import './ListCard.css';
import ListItem from './ListItem';

function ListCard({ card }){
    let cards_list = []
    cards_list = card.sublist.map(listItem =>
        <tr>
            <ListItem listItem ={listItem}/>   
        </tr>
    )

    return(
        <div className='list-card'>
            <h1>{card.title}</h1>
            <table className='table'>
                <tbody>
                    {cards_list}
                    <tr>
                        <span className='add-item-card'>Add a card...</span>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

ListCard.propTypes = {
    sublist: PropTypes.array
}
export default ListCard;