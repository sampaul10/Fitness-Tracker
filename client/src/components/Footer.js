import React from "react";

const Footer = () => {

    const links = [
        {
            name: 'My Food Diary',
            url: 'https://www.myfooddiary.com/'
        },
        {
            name: 'Running Training Plans',
            url: 'https://www.nike.com/running/training-plans'
        },
        
    ];

    return (
        
        <footer className="footer">
            <ul className="nav-list footer-list">
                {links.map((link) => (
                    <li className="list-item" key={link.name}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                    </li>
                ))}
            </ul>
        </footer>
    );
}

export default Footer;