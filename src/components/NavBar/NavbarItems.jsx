import { useDispatch } from "react-redux";
import ThemeChange from "../ThemeChange/ThemeChange";
import { IconButton, Stack, TextField } from '@mui/material';
import useCurrentUser from "../../hooks/useCurrentUser";
import { logOutUser } from "../../reduxFeatures/GoogleAuth/GoogleAuthSlice";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase";
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from "react-router-dom";
import CustomThemeSwitcher from "./CustomThemeSwitcher";

function NavbarItems() {
    const dispatch = useDispatch();
    const user = useCurrentUser();

    const handleSignOut = () => {
        dispatch(logOutUser());
        signOut(auth);
    }

    return (
        <div>
            <div className='hidden md:flex gap-5 items-center'>
                <div>
                    <Stack direction="row">
                        <TextField
                            label="Search"
                            variant="outlined"
                            size="small"
                            slotProps={{
                                input: {
                                    endAdornment: (
                                        <IconButton type="button" aria-label="search" size="small">
                                            <SearchIcon />
                                        </IconButton>
                                    ),
                                    sx: { pr: 0.5 },
                                },
                            }}
                        />
                    </Stack>
                </div>
                <div className='border hover:text-gray-200 dark:hover:text-gray-200 dark:text-[#ac9330] text-[#757575] hover:bg-[#41a9f9] rounded-full p-[6px] border-[#c4c4c4] dark:border-[#494949]'>
                    <ThemeChange />
                </div>
                <div className='flex gap-5 items-center'>
                    {

                        user ? <button onClick={handleSignOut} className='border rounded-[4px] px-4 py-[6px] border-[#c4c4c4] text-[#757575] dark:text-[#b8b8b8] dark:border-[#494949] hover:bg-[#41a9f9] hover:text-gray-800 dark:hover:text-gray-800'>Log Out</button> : <><NavLink to="/login" className="border rounded-[4px] px-4 py-[6px] border-[#c4c4c4] text-[#757575] dark:text-[#b8b8b8] dark:border-[#494949] hover:bg-[#41a9f9] hover:text-gray-800 dark:hover:text-gray-800">Log In</NavLink>
                            <NavLink to="/signup" className="border rounded-[4px] px-4 py-[6px] border-[#c4c4c4] text-[#757575] dark:text-[#b8b8b8] dark:border-[#494949] hover:bg-[#41a9f9] hover:text-gray-800 dark:hover:text-gray-800">Sign Up</NavLink></>

                    }

                </div>
            </div>
            <div className='flex md:hidden'>
                <CustomThemeSwitcher />
            </div>
        </div >
    );
};

export default NavbarItems;