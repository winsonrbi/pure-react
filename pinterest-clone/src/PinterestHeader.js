import React from 'react';
import PropTypes from 'prop-types';
import './PinterestHeader.css';

function PinterestHeader({ profileHeader }){
    return(
        <div>
            <img src={profileHeader.imgSrc}  alt={profileHeader.name + " profile picture"}/>
            <h1 className='header-name'>{profileHeader.name}</h1>
        </div>
    );
}
PinterestHeader.propTypes = {
    profileHeader: PropTypes.shape({
        name: PropTypes.string,
        imgSrc: PropTypes.string
    })
}

export default PinterestHeader;