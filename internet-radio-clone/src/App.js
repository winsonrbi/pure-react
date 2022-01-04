import React from "react";
import PropTypes from 'prop-types';
import icon from './icon.svg';
import './App.css';

function App({ genres }) {
    let genreButtons = [];
    for(let i=0; i < 10; i++) {
        genreButtons.push(<button className='lrg-btn'>{genres[i]}</button>);
    }
    for(let i=10; i < 30; i++) {
        genreButtons.push(<button className='med-btn'>{genres[i]}</button>);
    }
    for(let i=30; i < 60; i++) {
        genreButtons.push(<button className='small-btn'>{genres[i]}</button>);
    }
    for(let i=60; i < genres.length; i++) {
        genreButtons.push(<button className='xsmall-btn'>{genres[i]}</button>);
    }
    
    return(
        <div className='panel'>
            <div className='header-container'>
                <h3> 
                    <img src={icon} alt='icon'/>
                    Popular Genres
                </h3>
            </div>
            <div className='buttons-container'>
                {genreButtons}
            </div>
        </div>
    );
}
App.propTypes = {
    genres: PropTypes.array.isRequired,
}
export default App;