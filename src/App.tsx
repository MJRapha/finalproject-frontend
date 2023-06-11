import { useContext } from "react";
import Navabar from './components/main-navbar/Navabar';
import { Route, Routes } from "react-router-dom";
import './App.css';
import './themed-bootstrap.scss'
import AuthContext from './context/AuthContext';
import About from './routes/AboutPage/About';
import Home from './routes/HomePage/Home';
import Login from './routes/LoginPage/Login';
import Register from './routes/RegisterPage/Register';
import MobilePhones from "./routes/MobilePhones/MobilePhones";
import IPhonePage from "./components/IPhone-Page/IPhonePage";
import AndroidPage from "./components/Android-Page/AndroidPage";
import IPhoneDetails from "./components/IPhone-Page/IPhoneDetails";
import AndroidDetails from "./components/Android-Page/AndroidDetails";
import MCarouselDetails from "./components/multi-carousel/MCarouselDetails";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import PayButtonPage from "./routes/Pay-Button-Page/PayButtonPage";

function App() {
  const { isLoggedIn } = useContext(AuthContext)
  return (
    <>
      <ShoppingCartProvider>
        <Navabar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/phones" element={<MobilePhones />}>
            <Route path="IPhone" element={<IPhonePage />} />
            <Route path="Samsung" element={<AndroidPage />} />
            <Route path="IPhone/:id" element={<IPhoneDetails />} />
            <Route path="Samsung/:id" element={<AndroidDetails />} />
          </Route>
          <Route path="/phones/:id" element={<MCarouselDetails />} />
          {!isLoggedIn && <Route path="/login" element={<Login />} />}
          {!isLoggedIn && <Route path="/register" element={<Register />} />}
          <Route path="/pay" element={<PayButtonPage />} />
        </Routes>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
