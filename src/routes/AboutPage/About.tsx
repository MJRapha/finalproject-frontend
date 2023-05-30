/* import { useContext } from "react";
import AuthContext from "../../context/AuthContext"; */
import { Navigate } from "react-router-dom";
import css from "./About.module.scss"

const About = () => {
    //const { username } = useContext(AuthContext) ?? "Guest";

    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/" />;
    }

    fetch("http://localhost:3001/api/books/all", {
        headers: { token: token },
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });

    return (
        <div className={css.myComponent}>
            <h2 className={css.text}>About Us</h2>
            <h3 className={css.list}>WHAT WE DO?</h3>
            <div className={css.p}>MobileShop gives you a chance to quickly and easily find the device you want and have it delivered to your home in no time, regardless of your location, as long as it is in one of the countries of the EU.</div>
            <h3 className={css.list}>WHY DO CUSTOMERS LOVE US?</h3>
            <div className={css.p}>We have been in the business for quite a while now, and in that time we have not only managed to make close relationships with numerous partners, but also to recognize what people need. At MobileShop you will find quality products from top brands at consistently low prices. We are offering a wide range of smartphones and tablets, notebooks and computer equipment, headsets and smartwatches, small household appliances and other electronics. Intelligent filter options and complete product information help customers to find exactly the products that suit them.</div>
        </div>
    )
};

export default About;