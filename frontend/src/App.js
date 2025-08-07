
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductDetail from './HomePages_Parts/ProductDetail';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import Admin from './pages/Admin';
import ShoppingCard from './pages/ShoppingCard';
import SearchProduct from './HomePages_Parts/SearchProduct';
import NoAccess from './pages/NoAccess';
import Checkout from './pages/Checkout';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Register/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route  path='/shop' element={<Home/>}/>
    <Route  path='/product-detail/:productid' element={<ProductDetail/>}/>
    <Route path='/shopping-card' element={<ShoppingCard/>}/>
    <Route path='/search'  element={<SearchProduct/>}/>
    <Route path='/admin/add-product' element={<AddProduct/>}/>
    <Route path='/admin/edit-product/:productid' element={<EditProduct/>}/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/unauthenticated' element={<NoAccess/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
