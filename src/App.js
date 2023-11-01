import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'

import Home from './pages/Home';
import RootLayout from './components/rootLayout/RootLayout';
import Users from './pages/users/Users';
import User from './pages/user/User';
import GeneralError from './pages/error/generalError';
import CreateUser from './pages/createUser/CreateUser';
import Products from './pages/products/Products';
import { loader as productsLoader } from './pages/products/Products';
import ProductDetail, {loader as productDetailLoader} from './components/productDetail/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <GeneralError/>,
    element: <RootLayout/>,
    children:[
      { index:true, element: <Home/> },
      { path: 'usersList', element: <Users/> },
      {path: 'user/:userId', element: <User/>},
      {path: 'newUser', element: <CreateUser/>},
      { path: 'products', element: <Products/>, loader: productsLoader},
      {path: 'product/:productId', element: <ProductDetail/>, loader: productDetailLoader}
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
