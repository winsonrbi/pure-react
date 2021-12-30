import React from 'react';
import "./HackerNewsHeader.css";

function HackerNewsHeader(){
    const menuItems = [
        {item:"new", href: "https://news.ycombinator.com/newest"},
        {item:"past", href: "https://news.ycombinator.com/front"},
        {item:"comments", href:"https://news.ycombinator.com/newcomments"},
        {item:"ask", href:"https://news.ycombinator.com/ask"},
        {item:"show", href:"https://news.ycombinator.com/show"},
        {item:"jobs", href:"https://news.ycombinator.com/jobs"},
        {item:"submit", href:"https://news.ycombinator.com/submit"}
    ]
    let headerMenu = menuItems.map( item => 
            <a href={item.href}>{item.item}</a>
        );
    
    for(let i= headerMenu.length -1; i >= 1; i--) {
        headerMenu.splice(i, 0, " | ")
    }
    return(
        <table className="header-menu" border={"0"} cellPadding={"0"} cellSpacing={"0"}>
            <tbody>
                <tr>
                    <td className="img-cell">
                        <a href='https://news.ycombinator.com'>
                            <img src='https://news.ycombinator.com/y18.gif' alt='Y-combinatior logo'/>
                        </a>
                    </td>
                    <td className="title-cell">
                        <span>
                            <b className='header-title'>
                                Hacker News
                            </b>
                        </span>
                    </td>
                    <td className="menu-cell">
                        <span>
                            {headerMenu}
                        </span>
                    </td>
                    <td className="login-cell">
                        <span>
                            <a href="https://news.ycombinator.com/login?goto=news">login</a>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default HackerNewsHeader;