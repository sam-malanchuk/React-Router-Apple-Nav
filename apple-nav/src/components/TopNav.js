import React from 'react';
import { NavLink } from 'react-router-dom';

function TopNav(props) {
    return (
        <nav className="topNav">
            {props.data.map((link, index) => {
                return <NavLink to={link.path} key={index}>{link.name}</NavLink>;
            })}
        </nav>
    );
};

export default TopNav;