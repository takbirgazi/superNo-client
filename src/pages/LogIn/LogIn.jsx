import { createTheme } from '@mui/material';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useSelector } from 'react-redux';

const providers = [
    { id: 'google', name: 'Google' },
    { id: 'credentials', name: 'Email and Password' },
];

const signIn = async (provider) => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Sign in with ${provider.id}`);
            resolve();
        }, 500);
    });
    return promise;
};

export default function LogIn() {
    // Change Theme 
    const isDark = useSelector((state) => state.changeTheme);
    const darkTheme = createTheme({
        palette: {
            mode: isDark ? "dark" : "light",
        },
    });

    return (
        <AppProvider theme={darkTheme}>
            <SignInPage
                signIn={signIn}
                providers={providers}
                sx={{
                    '& form > .MuiStack-root': {
                        marginTop: '2rem',
                        rowGap: '0.5rem',
                    },
                }}
            />
        </AppProvider>
    );
}
