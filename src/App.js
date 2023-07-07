import React from 'react';
import Content from './components/Content';
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material';
function App() {

  const [darkMode, setDarkMode] = React.useState(false);

  const isDark = darkMode? 'dark': 'light';

  const darkTheme = createTheme({
    palette: {
      mode: isDark,
    },
  });
  
  const handleDarkMode = () =>{
    setDarkMode(prev =>{
      return !prev;
    })
  }

  const styles = {
    background: darkMode? "rgb(20, 26, 37)" : 'white',
  }

  return (
    <div className="App" style={styles}>
      <ThemeProvider theme={darkTheme}>
        <Navbar handleDarkMode= {handleDarkMode} darkMode = {darkMode}/>
        <Content darkMode = {darkMode}/>
      </ThemeProvider>
      
      
    </div>
  );
}

export default App;
