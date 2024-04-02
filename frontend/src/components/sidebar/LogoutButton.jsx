import {LuLogOut} from "react-icons/lu";
import useLogout from "../../hooks/useLogout.js";


const LogoutButton = () => {
    const {loading, logout} = useLogout();

    return (
        <div className="mt-auto">
            {!loading ? (<LuLogOut onClick={logout}
                                   className="rotate-180 transform cursor-pointer text-white flip-x size-6"/>) : (
                <span className="loading loading-spinner"></span>)}

        </div>
    );
};

export default LogoutButton;
