import { useEffect, useState } from 'react';
import useCurrentUser from '../../hooks/useCurrentUser';
import { updateProfile } from 'firebase/auth';
import auth from '../../firebase/firebase';


const Profile = () => {
    const user = useCurrentUser();
    const [profileImage, setProfileImage] = useState();
    const [updateMessage, setUpdateMessage] = useState("");
    const ImageBbAPI = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImageBb_api}`;

    // Show Profile Image
    useEffect(() => {
        if (!user) {
            setProfileImage("https://placehold.co/400x400?text=Profile")
        } else {
            if (user?.photoURL == null) {
                setProfileImage("https://placehold.co/400x400?text=Profile")
            } else {
                setProfileImage(user?.photoURL)
            }
        }
    }, [user])

    // Instant Show Image Without Save Anywhere
    const handlerProfileImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                setProfileImage(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    //Update User
    const handleUpdateUser = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        // const email = form.email.value;
        // const phone = form.phone.value;
        // const address = form.address.value;
        const profile = event.target.profile.files[0];


        if (user !== null) {
            const formData = new FormData();
            formData.append("image", profile);

            try {
                await fetch(ImageBbAPI, {
                    method: "POST",
                    body: formData,
                })
                    .then((res) => res.json())
                    .then(data => {
                        console.log(data?.data?.display_url);
                        updateProfile(auth.currentUser, {
                            displayName: name,
                            photoURL: data?.data?.display_url,
                        })
                            .then(() => {
                                console.log("done")

                                setUpdateMessage(<div className='text-sm text-green-500'>Profile Update Successfully!</div>);
                                form.reset();
                            })
                            .catch(error => {
                                setUpdateMessage(<div className='text-sm text-red-500'>{error}</div>)
                            })
                    })

            } catch (error) {
                console.log(error)
            }
        } else {
            setUpdateMessage(<div className='text-sm text-red-500'>Please Log In or Sign Up First!</div>)
        }
    }

    return (
        <section className="bg-gray-50 dark:bg-[#121212] flex items-center justify-center p-4 w-full">
            <div className="w-full sm:max-w-lg bg-white rounded-lg shadow dark:bg-gray-800 dark:border dark:border-gray-700">
                <div className="p-6 space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white text-center">
                        Manage Your Profile
                    </h2>

                    {/* User Details Form */}
                    <form onSubmit={handleUpdateUser} className="space-y-4">
                        {/* Profile Picture Section */}
                        <div className="flex flex-col items-center space-y-4">
                            <img
                                className="w-24 h-24 rounded-full object-cover shadow"
                                src={profileImage}
                                alt={user?.displayName !== null ? user?.displayName : "Profile"}
                            />
                            <label
                                htmlFor="profile-picture"
                                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
                            >
                                Change Profile Picture
                            </label>
                            <input
                                onChange={handlerProfileImage}
                                id="profile-picture"
                                type="file"
                                name='profile'
                                accept="image/*"
                                className="hidden"
                            />
                        </div>
                        <div>
                            {updateMessage && updateMessage}
                        </div>
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
                                name='name'
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
                                name="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                                defaultValue={user?.email}
                                readOnly
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
                                name='phone'
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
                                name='address'
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