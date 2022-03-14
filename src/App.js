import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Buy from './Pages/Buy/Buy';
import AddProduct from './Pages/DashBoard/AddProduct/AddProduct';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <AuthProvider>
      <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
          <Route path="/buy:clockId" element={<Buy />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </AuthProvider>

  );
}

export default App;
