import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Buy from './Pages/Buy/Buy';
import AddProduct from './Pages/DashBoard/AddProduct/AddProduct';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import Navbar from './Pages/Shared/Navbar/Navbar';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';

function App() {
  return (<div className="App">
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/buy/:productId" element={<Buy />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* nested routes */}
          <Route path="/dashboard" element={<PrivateRoute>
            <DashBoard />
          </PrivateRoute>}>
            <Route exact path="/dashboard" element={<AddProduct />}>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  </div>

  );
}

export default App;
