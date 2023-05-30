import { Outlet } from "react-router-dom";
import PhonesNav from "../../components/phones-nav/PhonesNav";


const MobilePhones = () => {
    return (
        <>
            <PhonesNav />
            <div className="w-100">
                <Outlet />
            </div>
        </>
    )

}

export default MobilePhones;