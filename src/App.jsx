import { Outlet } from 'react-router-dom'
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux';

function App() {
  const isDark = useSelector((state) => state.changeTheme)
  const darkTheme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Outlet />
      </div>
    </ThemeProvider>
  )
}

export default App
