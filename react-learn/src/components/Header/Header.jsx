import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://thumbs.dreamstime.com/b/%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-%D0%B2%D0%BE%D0%BB%D0%BA-%D0%BE%D0%B4%D0%B8%D1%87%D0%B0%D0%BB%D1%8B%D0%B9-%D1%87%D0%B5%D1%80%D0%BD%D0%B0%D1%8F-%D0%B4%D0%B8%D0%BA%D0%B0%D1%8F-%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0-k-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF-%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B8-%D1%81%D0%BE%D0%B1%D0%B0%D1%87%D0%B8%D0%B9-115634878.jpg" />
            <div className={s.loginBlock}>
                {!props.isAuth ? <NavLink to={'/login'} className={s.loginLink}>Login</NavLink> : <NavLink to={'/profile'} className={s.loginLink}>{props.login}</NavLink>}
            </div>
        </header>
    )
};

export default Header;