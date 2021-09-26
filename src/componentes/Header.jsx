import './Header.css';
import {Search, FormatAlignLeft, LocalMall} from '@material-ui/icons';
import { Badge, Divider } from '@material-ui/core';
import Dropdown from './Dropdown';
import {Link} from 'react-router-dom';
import { useState } from 'react';



const Header = () => {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

        const handleClick = () => setClick(!click)
     
    return (
    <div className="header-container">
        <div className="header-wrapper">
            <div className="header-esquerda">
                <FormatAlignLeft className="hamburger" onClick={<Dropdown/>}>
                <Link to='/menu'></Link>{dropdown && <Dropdown />}
                </FormatAlignLeft>
                <Link to="/">
                <img src="./img/Logo_N1_Rush_fundo_escuro_bg_tranparente 1.png" alt="" className="header-logo"/>
                    </Link>
            </div>
            <div className="header-direita">
                <div className="header-contato">
                <img src="./img/paper-plane.png" alt="" className="header-email"/><Link className="link-contato" to="/contato">Contato</Link> 
                </div>
                <Divider/>
                <div className="header-buscar">
                    <Search className="header-search"/> <input type="text" placeholder="Buscar" className="header-buscar-input" />
                </div>
                <Divider/>
                <div className="header-cart">
                <Link to="/carrinho">
                <LocalMall className="header-mall"/> 
                    <Badge badgeContent={2} color="secondary" className="header-badge">
                    </Badge> 
                    </Link>
                    
                </div>
                </div>
            </div>
        </div>
    )
}

export default Header
