import React, { useState } from "react";
import classNames from "classnames";
import "./index.css";

const Menu = ({ items, className, handle }) => {
    const prefixClass = "menu";
    const classes = classNames(prefixClass, className);
    return (
        <ul className={classes}>
            {items.map((item) => {
                return <Submenu key={item.id} item={item} handle={handle}/>
            })}
        </ul>
    );
};

const Submenu = ({ item, handle }) => {
    const [toggle, setToggle] = useState(false);

    function handleToggle(item) {
        setToggle((toggle) => !toggle);
        handle(item);
    }
    return (
        <li className="menu-submenu" key={item.label}>
            <div className="menu-submenu-title" onClick={()=>handleToggle(item)}>
                <span className="icon">{item.icon}</span>
                <span>{item.label}</span>
            </div>
            {item.children && toggle && (
                <Menu className="sub-menu-root" items={item.children} handle={handle}/>
            )}
        </li>
    );
};

export default Menu;
