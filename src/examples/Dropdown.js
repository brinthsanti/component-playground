import React, { useState } from 'react';
import AntDropdown from '../components/Dropdown/AntDropdown';
import { Dropdown } from '../components/Dropdown';
const DropdownExample = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen((prevState) => !prevState);
    }
    return (
        <div className='dropdown-example'>
            <h3>Ant Dropdown</h3>
            <AntDropdown />
            <h3>My Dropdown</h3>
            <Dropdown isOpen={isOpen} toggle={handleClick} position='top'>
                <Dropdown.Toggle>
                    <button>Click me</button>
                </Dropdown.Toggle>
                <Dropdown.Items>
                    <ul style={{listStyle: 'none'}}>
                        <li>Menu 1</li>
                        <li>Menu 2</li>
                        <li>Menu 3</li>
                        <li>Menu 4</li>
                    </ul>
                </Dropdown.Items>
            </Dropdown>
            <nav>
                <div>Logo</div>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Portfolio</li>
                    <li>
                    <Dropdown isOpen={isOpen} toggle={handleClick} position='top'>
                <Dropdown.Toggle>
                    Connect
                </Dropdown.Toggle>
                <Dropdown.Items>
                    <ul style={{listStyle: 'none'}}>
                        <li>Menu 1</li>
                        <li>Menu 2</li>
                        <li>Menu 3</li>
                        <li>Menu 4</li>
                    </ul>
                </Dropdown.Items>
            </Dropdown>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default DropdownExample;