import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';
import './Time.css';

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return(
        <span className="time">
            {timeString}
        </span>
    );
};

Time.propTypes = {
    time: PropTypes.string.isRequired
};

export default Time;