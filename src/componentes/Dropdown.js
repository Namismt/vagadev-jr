import React from 'react';
import {MenuItems} from './MenuItem'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import './Dropdown.css'

function Dropdown() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className="dropdown-menu">
            <ul onClick={handleClick}>
                {MenuItems.map((item, title, )=>{
                    return(
                        <li key={title}>
                            <Link className={item.cName} to={item.path} onClick={()=> setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Dropdown;
