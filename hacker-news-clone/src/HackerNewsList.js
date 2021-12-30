import React from 'react';
import PropTypes from 'prop-types';
import Time from './Time';

function HackerNewsList({ news }){
    const newsCards = news.map(item =>
        <>
            <tr key={item.id}>
                <td>
                    {item.id}.
                </td>
                <td>
                    <img src="https://news.ycombinator.com/grayarrow.gif" alt="upvote arrow"/>
                </td>
                <td>
                    {item.title}
                </td>
                <td>
                    ({item.source})
                </td>
            </tr>
            <tr>
                <td colspan={"2"}></td>
                <td className='subtext'>
                    <span>{item.points} points by {item.author} <Time time={item.publishDate}/> | hide | {item.numComments} comment </span>    
                </td>
            </tr>
        </>
        )
    return(
        <table>
            <tbody>
                {newsCards}
            </tbody>
        </table>
    );
}

export default HackerNewsList;