import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
