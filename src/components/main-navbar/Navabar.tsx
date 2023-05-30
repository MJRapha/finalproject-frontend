import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import css from './Navabar.module.scss'
import { IsActiveProps } from "../../@types/@types";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useContext, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import UserConnected from "../user-connected/UserConnected";
import { GiSmartphone } from "react-icons/gi";

const Navabar = () => {
    const { isLoggedIn, logout } = useContext(AuthContext);
    const [isLogOut] = useState(false);
    const { openCart, cartQuantity } = useShoppingCart()
    if (isLogOut) {
        return <Navigate to="/" />;
    }
    const activeClass = (e: IsActiveProps, clz: string = "") =>
        e.isActive ? `${css.active} ${clz}` : clz;
    return (
        <>
            <Navbar sticky="top" bg="light" style={{ height: "70px", borderBottom: '1px solid #3e3c3c' }}>
                <Container>
                    <nav className={css.navWrapper}>
                        <NavLink to="/" className={activeClass}>
                            <span className="me-auto">Mobile Shop</span>
                            &nbsp;
                            <GiSmartphone />
                        </NavLink>
                        <Navbar.Toggle className="dropdown" aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink className={activeClass} to="/phones">Mobile Phones</NavLink>
                                {isLoggedIn && <NavLink className={activeClass} to="/about">About</NavLink>}
                                {!isLoggedIn && <NavLink className={activeClass} to="/register">Register</NavLink>}
                                {!isLoggedIn && <NavLink className={activeClass} to="/login">Sign In</NavLink>}
                                {isLoggedIn && <button style={{ textDecoration: "none", padding: "8px", margin: "30px", color: "black", fontWeight: "bold", borderRadius: "8px", transition: "0.5s" }} onClick={() => {
                                    localStorage.clear()
                                    logout()
                                }}>logout</button>}
                            </Nav>
                            {isLoggedIn && <UserConnected />}
                            <Button
                                onClick={openCart}
                                style={{ width: "3rem", height: "3rem", position: "relative" }}
                                variant="outline-primary"
                                className="rounded-circle" >
                                <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M21 9h-1.42l-3.712-6.496-1.736.992L17.277 9H6.723l3.146-5.504-1.737-.992L4.42 9H3a1.001 1.001 0 0 0-.965 1.263l2.799 10.264A2.005 2.005 0 0 0 6.764 22h10.473c.898 0 1.692-.605 1.93-1.475l2.799-10.263A.998.998 0 0 0 21 9zm-3.764 11v1-1H6.764L4.31 11h15.38l-2.454 9z"></path>
                                        <path d="M9 13h2v5H9zm4 0h2v5h-2z"></path>
                                    </g>
                                </svg>
                                {cartQuantity > 0 && (
                                    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{
                                        color: "white",
                                        width: "1.5rem",
                                        height: "1.5rem",
                                        position: "absolute",
                                        bottom: 0,
                                        right: 0,
                                        transform: "translate(25%, 25%)"
                                    }}
                                    >
                                        {cartQuantity}
                                    </div>
                                )}
                            </Button>

                        </Navbar.Collapse>
                    </nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navabar;

// npm i bootstrap sass formik yup react-router-dom react-icons
// npm i react-modal sweetalert2 react-bootstrap react-toastify react-loader-spinner axios
