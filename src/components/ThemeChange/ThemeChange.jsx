import { useDispatch, useSelector } from "react-redux";
import { theme } from "../../reduxFeatures/ThemeChange/ThemeChangeSlice";
import { IoIosSunny } from "react-icons/io";
// import { IoMoonSharp } from "react-icons/io5";
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeChange = () => {
    const isDark = useSelector((state) => state.changeTheme);
    const themeChange = useDispatch();

    const bodyId = document.getElementById("mainBody");

    if (isDark) {
        bodyId.classList.add("dark");
    } else {
        bodyId.classList.remove("dark");
    }

    return (
        <div onClick={() => themeChange(theme(!isDark))} className="text-2xl rounded-full cursor-pointer">
            {
                isDark ? <IoIosSunny /> : <DarkModeIcon />
            }
        </div>
    );
};

export default ThemeChange;