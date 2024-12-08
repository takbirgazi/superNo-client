import { Helmet } from "react-helmet-async";


const Profile = () => {
    return (
        <div>
            <Helmet>
                <title>Profile - SuperNo</title>
            </Helmet>
            <div className="p-4">
                This is an Profile super no page....
            </div>
        </div>
    );
};

export default Profile;