import { Helmet } from 'react-helmet-async';
import NavBar from '../../components/NavBar/NavBar';

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Home - {import.meta.env.VITE_project_name}</title>
            </Helmet>
            <div>
                <NavBar />
            </div>
        </div>
    );
};

export default Home;