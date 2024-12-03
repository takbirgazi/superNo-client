import { Helmet } from "react-helmet-async";


const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>Not Found - SuperNo</title>
            </Helmet>
            <div>
                This is an Error Page
            </div>
        </div>
    );
};

export default ErrorPage;