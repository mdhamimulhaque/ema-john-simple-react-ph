import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Store from './components/Store/Store';
import Main from './layouts/Main';
import Orders from './components/Orders/Orders'
import Inventory from './components/Inventory/Inventory';
import AboutUs from './components/AboutUs/AboutUs';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './routes/PrivateRoute';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Store />
        },
        {
          path: '/orders',
          loader: productsAndCartLoader,
          element: <Orders />
        },
        {
          path: '/inventory',
          element: <PrivateRoute><Inventory /></PrivateRoute>
        },
        {
          path: '/shipping',
          element: <PrivateRoute><Shipping /></PrivateRoute>
        },
        {
          path: '/about',
          element: <AboutUs />
        },
        {
          path: '/log-in',
          element: <LogIn />
        },
        {
          path: '/sign-up',
          element: <SignUp />
        }
      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
