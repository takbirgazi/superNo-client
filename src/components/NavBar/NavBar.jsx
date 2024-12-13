import PropTypes from 'prop-types';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import { useSelector } from 'react-redux';
import { createTheme } from '@mui/material';
import Profile from '../../pages/Profile/Profile';
import Marketplace from '../../pages/Marketplace/Marketplace';
import Checkout from '../../pages/Checkout/Checkout';
import { ImProfile } from "react-icons/im";
import { FaCcMastercard } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import NavbarItems from './NavbarItems';
import SidebarUser from './SidebarUser';

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
      <DashboardLayout slots={{ toolbarActions: NavbarItems, sidebarFooter: SidebarUser }}>
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