import { useContext } from "react";
//import { Navigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import css from "./UserConnected.module.scss"

const UserConnected = () => {
    const { username } = useContext(AuthContext) ?? "Guest";

    return <div className={css.user}>Hello {username}</div>;
};

export default UserConnected;