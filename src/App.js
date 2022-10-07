import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Store from './components/Store/Store';
import Main from './layouts/Main';
import Orders from './components/Orders/Orders'
import Inventory from './components/Inventory/Inventory';
import AboutUs from './components/AboutUs/AboutUs';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Store />
        },
        {
          path: '/orders',
          loader: productsAndCartLoader,
          element: <Orders />
        },
        {
          path: '/inventory',
          element: <Inventory />
        },
        {
          path: '/about',
          element: <AboutUs />
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
