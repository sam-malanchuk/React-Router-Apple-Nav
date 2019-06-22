import React from 'react';
import { LinkNav } from 'react-router-dom';

function TopNav(props) {
    return (
        <nav className="topNav">
            {props.data.map(link => {
                return <a href={link.link}>{link.name}</a>;
            })}
        </nav>
    );
};

export default TopNav;