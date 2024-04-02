import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import {Toaster} from "react-hot-toast";
import {useAuthContext} from "./context/AuthContext.jsx";

export default function App() {

    const {authUser} = useAuthContext();
    return (
        <div className="flex h-screen items-center justify-center p-4">
            <Routes>
                <Route path="/" element={authUser ? <Home/> : <Navigate to={"/login"}/>}/>
                <Route path="/login" element={authUser ? <Navigate to="/"/> : <Login/>}/>
                <Route path="/signup" element={authUser ? <Navigate to="/"/> : <Signup/>}/>

            </Routes>
            <Toaster/>
        </div>
    );
}
