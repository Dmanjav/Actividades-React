import './App.css';
import ListaTareas from './components/ListaTareas';
import ProveedorTareas from './components/ProveedorTarea';
import { createContext, useState } from 'react';
import ThemeBtn from './components/Theme';

export const ThemeContext = createContext(null);


function App() {

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((actual) => {
      return actual === 'light' ? 'dark' : 'light';
    });
  }

  return (
    <ProveedorTareas value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <ThemeBtn toggleTheme={toggleTheme} />
        < ListaTareas />
      </div>
    </ProveedorTareas>

  );
}

export default App;