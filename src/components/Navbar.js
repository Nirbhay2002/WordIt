import {  FormControlLabel, Switch } from "@mui/material";

const Navbar = ({handleDarkMode, darkMode}) => {

    const fontStyles = {
        color: darkMode? "white" : "black"
      }

    return ( 
        <div id="navbar-container">
            <div className='navbar-left'>
                <h1 style={fontStyles}>WordIt</h1>
            </div>
            <div className="navbar-right">
                <FormControlLabel control={<Switch></Switch>} label="Toggle Dark Mode" onChange={handleDarkMode} style={fontStyles}></FormControlLabel>
            </div>
        </div>
     );
}
 
export default Navbar;