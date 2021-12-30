import React from 'react';
import PropTypes from 'react';
import './App.css';
import HackerNewsHeader from './HackerNewsHeader';
import HackerNewsList from './HackerNewsList';

function App({ news }){
    return(
        <center>
            <table className='main-table' border={"0"} cellPadding={"0"} cellSpacing={"0"}>
                <tbody>
                    <tr>
                        <td>
                            <HackerNewsHeader/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <HackerNewsList news={news}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </center>
    );
}
App.propTypes = {
    news: PropTypes.array
}

export default App;