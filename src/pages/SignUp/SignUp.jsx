import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase";
import { logInUser, setError } from "../../reduxFeatures/GoogleAuth/GoogleAuthSlice";
import useCurrentUser from "../../hooks/useCurrentUser";

const SignUp = () => {
    const isDark = useSelector(state => state.changeTheme);
    const [showPwd, setShowPwd] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useCurrentUser();

    useEffect(() => {
        if (user !== null) {
            navigate("/");
        }
    }, [navigate, user])

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(() => {
                dispatch(logInUser(auth.currentUser));
                navigate("/");
            })
            .catch(error => dispatch(setError(error.message)))
    }

    const signUpHandleSubmit = (event) => {
        event.preventDefault();
        const formData = event.target;
        const email = formData.email.value;
        const password = formData.password.value;
        const confirmPassword = formData.confirmPassword.value;

        if (password !== confirmPassword) {
            setMessage(<span className="text-red-500">Password and Confirm password are not same!</span>);
            return
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    dispatch(logInUser(auth.currentUser));
                    setMessage(<span className="text-blue-400">Account Created Successfully!</span>);
                })
                .catch(error => {
                    dispatch(setError(error.message));
                    setMessage(<span className="text-red-500">{error.message}</span>);
                })
        }
    }
    return (
        <main className={`${isDark && "dark"}`}>
            <Helmet>
                <title>Sign Up - SuperNo</title>
            </Helmet>
            <section className="bg-gray-50 dark:bg-[#121212] min-h-screen flex items-center justify-center p-4">
                <div className="w-full sm:max-w-md lg:max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow dark:border dark:border-gray-700">
                    <div className="p-6 space-y-4 sm:space-y-6">
                        <h1 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white text-center">
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={signUpHandleSubmit}>
                            {/* Email Field */}
                            <div>
                                <p className="text-sm">{message}</p>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            {/* Password Field */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPwd ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-8"
                                        required
                                    />
                                    <span onClick={() => setShowPwd(!showPwd)} className="absolute top-[13px] right-3 cursor-pointer"> {showPwd ? <FaEyeSlash /> : <FaEye />} </span>
                                </div>
                            </div>
                            {/* Confirm Password Field */}
                            <div>
                                <label
                                    htmlFor="confirm-password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Confirm password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPwd ? "text" : "password"}
                                        name="confirmPassword"
                                        id="confirm-password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white pr-8"
                                        required
                                    />
                                    <span onClick={() => setShowPwd(!showPwd)} className="absolute top-[13px] right-3 cursor-pointer"> {showPwd ? <FaEyeSlash /> : <FaEye />} </span>
                                </div>
                            </div>
                            {/* Submit Button */}
                            <input
                                type="submit"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white cursor-pointer"
                                value="Sign Up"
                            />
                        </form>
                        <div onClick={handleGoogleLogin} className="flex items-center justify-center gap-5 cursor-pointer">
                            <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white flex gap-2 items-center"> <FaGoogle className="text-2xl" /> Login With Google</div>
                        </div>
                    </div>
                    {/* Redirect to Login */}
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center pb-10">
                        Already have an account?
                        <NavLink to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500" > Login here </NavLink>
                    </p>
                </div>
            </section>
        </main>
    );
};

export default SignUp;