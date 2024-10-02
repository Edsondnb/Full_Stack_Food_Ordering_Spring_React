import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';

function App() {
  return (

    <ThemeProvider theme={darkTheme}>
      <Navbar/>
      <CssBaseline/>

    </ThemeProvider>


  );
}

export default App;
