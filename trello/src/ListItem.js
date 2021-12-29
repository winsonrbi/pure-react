import React from 'react';
import PropTypes from 'prop-types';

function ListItem({ listItem }){
    return(
        <div className='item-card'>
            <span>{listItem}</span>
        </div>
    );
}
ListItem.propTypes = {
    listItem: PropTypes.string
}
export default ListItem;