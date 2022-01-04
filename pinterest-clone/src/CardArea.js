import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './CardArea.css';

function CardArea({ cards, author }){
    return(
        <div className = "cards-grid">
            {cards.map(card =>
                <Card key={card.id} title={card.title} author={author} pins={card.pins} pic1={card.pic1} pic2={card.pic2} pic3={card.pic3} pic4={card.pic4}/>)}
        </div>
    );
}
CardArea.propTypes = {
    cards: PropTypes.array.isRequired,
    author: PropTypes.string.isRequired,
}
export default CardArea;