import React from 'react';
import PropTypes from 'prop-types';
import './HackerNewsList.css';
import Time from './Time';

function HackerNewsList({ news }){
    const newsCards = news.map(item =>
        <>
            <tr key={item.id}>
                <td>
                    <h1>{item.id}.</h1>
                </td>
                <td>
                    <img className="upvote-arrow" src="https://news.ycombinator.com/grayarrow.gif" alt="upvote arrow"/>
                </td>
                <td>
                    <h2>{item.title}</h2>
                </td>
                <td>
                    <h3>({item.source})</h3>
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
HackerNewsList.propTypes = {
    news: PropTypes.array
}

export default HackerNewsList;