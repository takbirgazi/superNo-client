import PropTypes from 'prop-types';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import { useSelector } from 'react-redux';
import ThemeChange from '../ThemeChange/ThemeChange';
import { Button, createTheme, IconButton, Popover, Stack, TextField, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Profile from '../../pages/Profile/Profile';
import Marketplace from '../../pages/Marketplace/Marketplace';
import Checkout from '../../pages/Checkout/Checkout';
import { ImProfile } from "react-icons/im";
import { FaCcMastercard } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

// Router Data 
const NAVIGATION = [
  {
    segment: "",
    title: "Browsing Marketplace",
    icon: <TiShoppingCart />,
  },
  {
    segment: "profile",
    title: 'Profile Management',
    icon: <ImProfile />,
  },
  {
    segment: "checkout",
    title: "Checkout Functionality",
    icon: <FaCcMastercard />,
  }
];
// Showing Router Element 
const RouterElement = ({ pathname }) => {
  switch (pathname.pathname) {
    case "/":
      return <Marketplace />;
    case "/profile":
      return <Profile />;
    case "/checkout":
      return <Checkout />;
    default:
      return <div className='flex items-center justify-center text-center h-full text-2xl'>No Data Found</div>;
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
            <Button href="/login">Log In</Button>
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
          <NavLink to="/login" className="border rounded-[4px] px-4 py-[6px] border-[#c4c4c4] text-[#757575] dark:text-[#b8b8b8] dark:border-[#494949] hover:bg-[#41a9f9] hover:text-gray-800 dark:hover:text-gray-800">Log In</NavLink>
          <NavLink to="/signup" className="border rounded-[4px] px-4 py-[6px] border-[#c4c4c4] text-[#757575] dark:text-[#b8b8b8] dark:border-[#494949] hover:bg-[#41a9f9] hover:text-gray-800 dark:hover:text-gray-800">Sign Up</NavLink>
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