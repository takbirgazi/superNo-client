import { useSelector } from "react-redux";

const ErrorPage = () => {
    const isDark = useSelector(state => state.changeTheme);
    return (
        <main className={isDark && "dark"}>
            <section className="bg-gray-50 dark:bg-[#121212] min-h-screen flex items-center justify-center px-6 py-12">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                        Oops! Page not found.
                    </h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
                        We can&apos;t seem to find the page you&apos;re looking for.
                    </p>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Error code: <span className="font-bold text-primary-600">404</span>
                    </p>
                    {/* Button to Redirect */}
                    <div className="mt-6">
                        <a
                            href="/"
                            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-[#121212] dark:text-white text-lg font-medium rounded-lg border"
                        >
                            Go Back to Homepage
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ErrorPage;