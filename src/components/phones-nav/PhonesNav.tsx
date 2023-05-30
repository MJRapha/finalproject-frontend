import { NavLink } from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { IsActiveProps } from '../../@types/@types';
import { BsApple, BsAndroid2 } from "react-icons/bs";
import css from './PhonesNav.module.scss'

const PhonesNav = () => {
    const activeClass = (e: IsActiveProps, clz: string = "") =>
        e.isActive ? `${css.active} ${clz}` : clz;
    return (
        <Navbar bg="light" style={{ zIndex: "1", height: "70px", borderBottom: '1px solid #3e3c3c' }}>
            <Container>
                <nav className={css.navWrapper}>
                    <div className={css.spacer}></div>
                    <NavLink className={activeClass} to="IPhone">
                        iOS
                        &nbsp;
                        <BsApple />
                    </NavLink>
                    <div className={css.spacer}></div>
                    <NavLink className={activeClass} to="Samsung">
                        Android
                        &nbsp;
                        <BsAndroid2 />
                    </NavLink>
                    <div className={css.spacer}></div>
                </nav>
            </Container>
        </Navbar>
    )
};

export default PhonesNav;