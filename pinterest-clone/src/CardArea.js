import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function CardArea({ cards }){
    return(
        <div className = "cards-grid">
            {cards.map(card =>
                <Card card ={card}/>)}
        </div>
    );
}
export default CardArea;