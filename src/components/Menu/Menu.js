import React, { useState } from "react";
import classNames from "classnames";
import "./index.css";

const Menu = ({ items, className }) => {
    const prefixClass = "menu";
    const classes = classNames(prefixClass, className);
    return (
        <ul className={classes}>
            {items.map((item) => {
                return <Submenu item={item} />
            })}
        </ul>
    );
};

const Submenu = ({ item }) => {
    const [toggle, setToggle] = useState(false);

    function handleToggle(e) {
        setToggle((toggle) => !toggle);
    }
    return (
        <li className="menu-submenu" key={item.label}>
            <div className="menu-submenu-title" onClick={handleToggle}>
                <span className="icon">{item.icon}</span>
                <span>{item.label}</span>
            </div>
            {item.children && toggle && (
                <Menu className="sub-menu-root" items={item.children} />
            )}
        </li>
    );
};

export default Menu;
