import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

//components
import HomeScreen from './screens/Home.screen';
import NavbarLayout from './components/layouts/Navbar.layout';
import Register from './components/auth/Register.component';
import Login from './components/auth/Login.component';

function App() {
  return (
    <BrowserRouter>
      <div >
        <NavbarLayout />
        <Routes>
          <Route path={'/'} element={<HomeScreen />} />
          <Route path={'/auth/register'} element={<Register />} />
          <Route path={'/auth/login'} element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
