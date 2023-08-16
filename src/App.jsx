import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './ui/Home'
import Error from './ui/Error'
import Menu, {loader as menuLoader} from './features/menu/Menu'
import Cart from './features/cart/Cart'
import Order from './features/order/Order'
import CreateOrder from './features/order/CreateOrder'
import AppLayout from './ui/AppLayout'

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu />,
          errorElement: <Error />,
          loader: menuLoader,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/order/:orderId",
          element: <Order />,
          loader: orderLoader,
          errorElement: <Error />,
        },
        {
          path: "/order/new",
          element: <CreateOrder />,
          action: createOrderAction,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App