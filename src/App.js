import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login/Login/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='login' element={<Login></Login>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
