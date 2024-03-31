

import React, {useState} from "react";
import GenderCheckbox from "./GenderCheckbox";
import {Link} from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
    const [input, setInput] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    })

    const {loading, signup} = useSignup();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(input);

    }
    const handleCheckboxChange = (gender) => {
        setInput({...input, gender})
    }
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg  bg-stone-600 ">
                <h1 className="text-3xl font-semibold text-center text-stone-200">
                    Signup
                    <span className="text-teal-400">Yapper</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text ">Full Name</span>
                        </label>
                        <input
                            type="text"
                            value={input.fullName}
                            onChange={(e) => setInput({...input, fullName: e.target.value})}
                            placeholder="Enter Full Name"
                            className="input input-bordered input-primary w-full max-w-xs"
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text ">Username</span>
                        </label>
                        <input
                            type="text"
                            value={input.username}
                            onChange={(e) => setInput({...input, username: e.target.value})}
                            placeholder="Enter Username"
                            className="input input-bordered input-primary w-full max-w-xs"
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            value={input.password}
                            onChange={(e) => setInput({...input, password: e.target.value})}
                            placeholder="Enter Password"
                            className="input input-bordered input-primary w-full max-w-xs"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            value={input.confirmPassword}
                            onChange={(e) => setInput({...input, confirmPassword: e.target.value})}
                            placeholder="Confirm Password"
                            className="input input-bordered input-primary w-full max-w-xs"
                        />
                    </div>

                    <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender = {input.gender}/>

                    <Link
                        to="/login"
                        className="text-sm hover:underline hover:text-teal-400 mt-2 inline-block"
                    >
                        Already have an account? Login
                    </Link>
                    <div>
                        <button className="btn btn-block btn-sm mt-2 btn-primary">
                            Signup
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;