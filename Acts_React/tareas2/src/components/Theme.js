import React from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import '../styles/Theme.css';

const ThemeBtn = ({ toggleTheme }) => {
    return (
        <button className="theme-boton" onClick={toggleTheme}>
            <WbSunnyIcon />
        </button>
    );
};

export default ThemeBtn;