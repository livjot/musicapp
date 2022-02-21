import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/musicapp/navbar/NavBar';
import Home from './Components/musicapp/home/home'
import Login from "./Components/musicapp/login";
import Register from "./Components/musicapp/register";
import Products from "./Components/musicapp/products/Products";
import ProductAdmin from "./Components/musicapp/products/ProductAdmin";
import AddProduct from './Components/musicapp/products/AddProduct';
import UpdateProduct from './Components/musicapp/products/UpdateProduct';
import { Provider } from 'react-redux';
import { store } from './Components/redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <NavBar />
          <Routes>

            <Route exact path="/home" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/productAdmin" element={<ProductAdmin />} />
            <Route exact path="/addproduct" element={<AddProduct />} />
            <Route exact path="/updateproduct/:id" element={<UpdateProduct />} />



          </Routes>

        </Router>
      </Provider>
    </>
  );
}

export default App;
