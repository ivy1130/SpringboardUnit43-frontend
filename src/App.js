import { BrowserRouter } from 'react-router-dom'
import './App.css';

import NavBar from './NavBar';
import Routes from './Routes';

function App() {
  return (
   <BrowserRouter>
    <NavBar />
    <Routes />
   </BrowserRouter>
  );
}

export default App;
