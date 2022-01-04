import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card({ title, author, pins, pic1, pic2, pic3, pic4 }) {
    return(
        <div className='card-container'>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <div className='pic-container'>
                <div className='pic1' style={{ backgroundImage:`url(${pic1})`}}>
                    <div className='card-pins-container'>
                        <span className="card-pins"> {pins} </span>
                    </div>
                </div>
                <div className='pic2' style={{ backgroundImage:`url(${pic2})`}}/>
                <div className='pic3' style={{ backgroundImage:`url(${pic3})`}}/>
                <div className='pic4' style={{ backgroundImage:`url(${pic4})`}}/>
            </div>
            <button className='follow-button'>
                <span className='follow-text'>Follow</span>
            </button>
        </div>
    );
}
Card.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    pins: PropTypes.number.isRequired,
    pic1: PropTypes.string.isRequired,
    pic2: PropTypes.string.isRequired,
    pic3: PropTypes.string.isRequired,
    pic4: PropTypes.string.isRequired,
}

export default Card;