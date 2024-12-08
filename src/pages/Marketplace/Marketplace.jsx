import { Helmet } from "react-helmet-async";

const Marketplace = () => {
    return (
        <div>
            <Helmet>
                <title>Marketplace - SuperNo</title>
            </Helmet>
            <div className="p-4">
                This is a Marketplace page
            </div>
        </div>
    );
};

export default Marketplace;