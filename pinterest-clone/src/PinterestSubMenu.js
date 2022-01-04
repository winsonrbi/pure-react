import React from 'react';
import PropTypes from 'prop-types';
import './PinterestSubMenu.css';

function PinterestSubMenu({ profileSubMenu }){
    const items = ['Boards','Pins','Likes','Followers','Following'];
    const cards = items.map(item => 
        <td key={item+'-key'}>
            <div className='submenu-item'>
                <div>
                    {
                        (profileSubMenu['num' + item] > 1000) ? 
                            (profileSubMenu['num'+ item] / 1000).toFixed(1)+ 'k' :
                            profileSubMenu['num'+ item]
                    }
                </div>
                <div>
                    {item}
                </div>
            </div>
        </td>
        )
    return(
        <div className='submenu'>
            <table>
                <tbody>
                    <tr>
                        {cards}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
PinterestSubMenu.propTypes = {
    profileSubMenu: PropTypes.shape({
        numBoards: PropTypes.number,
        numPins: PropTypes.number,
        numLikes: PropTypes.number,
        numFollowers: PropTypes.number,
        numFollowing: PropTypes.number,
    })
}
export default PinterestSubMenu;