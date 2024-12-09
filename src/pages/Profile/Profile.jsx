

const Profile = () => {
    return (
        <section className="bg-gray-50 dark:bg-[#121212] flex items-center justify-center p-4 w-full">
            <div className="w-full sm:max-w-lg bg-white rounded-lg shadow dark:bg-gray-800 dark:border dark:border-gray-700">
                <div className="p-6 space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white text-center">
                        Manage Your Profile
                    </h2>
                    {/* Profile Picture Section */}
                    <div className="flex flex-col items-center space-y-4">
                        <img
                            className="w-24 h-24 rounded-full object-cover shadow"
                            src="https://via.placeholder.com/150"
                            alt="Profile"
                        />
                        <label
                            htmlFor="profile-picture"
                            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
                        >
                            Change Profile Picture
                        </label>
                        <input
                            id="profile-picture"
                            type="file"
                            accept="image/*"
                            className="hidden"
                        />
                    </div>
                    {/* User Details Form */}
                    <form className="space-y-4">
                        {/* Full Name */}
                        <div>
                            <label
                                htmlFor="full-name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="full-name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@example.com"
                                required
                            />
                        </div>
                        {/* Phone */}
                        <div>
                            <label
                                htmlFor="phone"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="+1234567890"
                            />
                        </div>
                        {/* Address */}
                        <div>
                            <label
                                htmlFor="address"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Address
                            </label>
                            <textarea
                                id="address"
                                rows="3"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="123 Main St, City, Country"
                            ></textarea>
                        </div>
                        {/* Save Button */}
                        <button
                            type="submit"
                            className="text-[#121212] dark:text-gray-200 bg-primary-600 hover:bg-primary-700 border dark:border-gray-600  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700"
                        >
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Profile;