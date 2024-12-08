import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const LogIn = () => {
    const isDark = useSelector(state => state.changeTheme);
    return (
        <main className={`${isDark && "dark"}`}>
            <Helmet>
                <title>Log In - SuperNo</title>
            </Helmet>
            <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center p-4">
                <div className="w-full sm:max-w-md lg:max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow dark:border dark:border-gray-700">
                    <div className="p-6 space-y-4 sm:space-y-6">
                        <h1 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white text-center"> Log In </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            {/* Email Field */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Write your email"
                                    required
                                />
                            </div>
                            {/* Password Field */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Create an account
                            </button>
                            {/* Redirect to Login */}
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                                I want to create an account?{" "}
                                <NavLink to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500" > Sign Up here </NavLink>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LogIn;