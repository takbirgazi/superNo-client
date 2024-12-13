import { useDispatch, useSelector } from "react-redux";
import ThemeChange from "../ThemeChange/ThemeChange";
import { IconButton, Stack, TextField, Tooltip, Popover, Button } from '@mui/material';
import { useCallback, useState } from "react";
import useCurrentUser from "../../hooks/useCurrentUser";
import { logOutUser } from "../../reduxFeatures/GoogleAuth/GoogleAuthSlice";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase";
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';

function CustomThemeSwitcher() {
    const isDark = useSelector((state) => state.changeTheme);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    const dispatch = useDispatch();
    const user = useCurrentUser();

    const handleSignOut = () => {
        dispatch(logOutUser());
        signOut(auth);
    }

    const toggleMenu = useCallback(
        (event) => {
            setMenuAnchorEl(isMenuOpen ? null : event.currentTarget);
            setIsMenuOpen((previousIsMenuOpen) => !previousIsMenuOpen);
        },
        [isMenuOpen],
    );

    return (
        <div>
            <Tooltip title="Settings" enterDelay={1000}>
                <div>
                    <IconButton type="button" aria-label="settings" onClick={toggleMenu}>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </Tooltip>
            <Popover
                open={isMenuOpen}
                anchorEl={menuAnchorEl}
                onClose={toggleMenu}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                disableAutoFocus
            >
                <div className='flex flex-col gap-4 px-6 py-4 w-full'>
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
                    <div className='flex gap-2 border-t border-b py-1 border-gray-500'>
                        {
                            user ? <Button onClick={handleSignOut} >Log Out</Button> : <><Button href="/login">Log In</Button>
                                <Button href="/signup">Sign Up</Button></>
                        }
                    </div>
                    <div className='w-full flex gap-1'>
                        <ThemeChange /> Change to <span>{isDark ? "Light" : "Dark"}</span>
                    </div>
                </div>

            </Popover>
        </div>
    );
}

export default CustomThemeSwitcher;