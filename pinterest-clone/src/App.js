import React from 'react';
import PropTypes from 'prop-types';
import PinterestHeader from './PinterestHeader';
import PinterestSubMenu from './PinterestSubMenu';
import CardArea from './CardArea';

function App({ profile }){
    return(
        <div>
            <PinterestHeader profileHeader={profile.profileHeader}/>
            <PinterestSubMenu profileSubMenu={profile.profileSubMenu}/>
            <CardArea cards={profile.cards} author={profile.profileHeader.name}/>
        </div>
    );
}
App.propTypes = {
    profile: PropTypes.shape({
        profileHeader: PropTypes.shape({
            name: PropTypes.string,
            imgSrc: PropTypes.string
        }),
        profileSubMenu: PropTypes.shape({
            numBoards: PropTypes.number,
            numPins: PropTypes.number,
            numLikes: PropTypes.number,
            numFollowers: PropTypes.number,
            numFollowing: PropTypes.number,
        }),
        cards: PropTypes.array.isRequired,
    })
}
export default App;