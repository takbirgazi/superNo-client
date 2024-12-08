import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";


const ErrorPage = () => {
    const isDark = useSelector(state => state.changeTheme);
    return (
        <main className={`${isDark && "dark"}`}>
            <Helmet>
                <title>Not Found - SuperNo</title>
            </Helmet>
            <div className="p-4 dark:bg-gray-800 h-10">
                This is an Error Page
            </div>
        </main>
    );
};

export default ErrorPage;