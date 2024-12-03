import PropTypes from 'prop-types';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TimelineIcon from '@mui/icons-material/Timeline';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import { useSelector } from 'react-redux';
import ThemeChange from '../ThemeChange/ThemeChange';
import { Button, IconButton, Popover, Stack, TextField, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';

// Router Data 
const NAVIGATION = [
  {
    segment: 'home',
    title: 'Home Page',
    icon: <DashboardIcon />,
  },
  {
    segment: "about",
    title: 'About Page',
    icon: <TimelineIcon />,
  },
];
// Showing Router Element 
const RouterElement = ({ pathname }) => {
  const myPath = pathname.pathname;
  if (myPath == "/home") {
    return <div>This Is Home Page</div>
  } else {
    return <div>No Data Found</div>
  }
};

// Mobile Menu Navbar
function CustomThemeSwitcher() {
  const isDark = useSelector((state) => state.changeTheme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

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
              <Tooltip title="Search" enterDelay={1000}>
              </Tooltip>
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
            <Button href="#text-buttons">Log In</Button>
            <Button href="#text-buttons">Sign Up</Button>
          </div>
          <div className='w-full flex gap-1'>
            <ThemeChange /> Change to <span>{isDark ? "Light" : "Dark"}</span>
          </div>
        </div>

      </Popover>
    </div>
  );
}
// Menu Navbar Desktop

function NavbarItems() {
  return (
    <div>
      <div className='hidden md:flex gap-5 items-center'>
        <div>
          <Stack direction="row">
            <Tooltip title="Search" enterDelay={1000}>
            </Tooltip>
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
          <NavLink to="/" className="border rounded-[4px] px-4 py-[6px] border-[#c4c4c4] text-[#757575] dark:text-[#b8b8b8] dark:border-[#494949] hover:bg-[#41a9f9] hover:text-gray-800 dark:hover:text-gray-800">Log In</NavLink>
          <NavLink to="/" className="border rounded-[4px] px-4 py-[6px] border-[#c4c4c4] text-[#757575] dark:text-[#b8b8b8] dark:border-[#494949] hover:bg-[#41a9f9] hover:text-gray-800 dark:hover:text-gray-800">Log In</NavLink>
        </div>
      </div>
      <div className='flex md:hidden'>
        <CustomThemeSwitcher />
      </div>
    </div>
  );
};

function NavBar() {

  const router = useDemoRouter('');
  // Change Theme 
  const isDark = useSelector((state) => state.changeTheme);
  const darkTheme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });


  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={darkTheme}
      branding={{
        logo: false,
        title: 'SuperNo',
      }}
    >
      <DashboardLayout slots={{ toolbarActions: NavbarItems }}>
        <RouterElement pathname={router} />
      </DashboardLayout>
    </AppProvider>
  );
}

export default NavBar;

NavBar.propTypes = {
  window: PropTypes.func,
};
RouterElement.propTypes = {
  pathname: PropTypes.object
};