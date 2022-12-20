import Login  from './pages/Login/Login';
import Register from './pages/Register/Register';
import Mainpage from './pages/Mainpage/Mainpage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: "/", 
      element:<Mainpage/>,
    },
    {
      path: "/login", 
      element:<Login/>,
    },
    {
      path: "/register", 
      element:<Register/>,
    },
    {
      path: "/mainpage", 
      element:<Mainpage/>,
    }
  ]);

  return (
 <>
  <RouterProvider router={router} />
  </>
  );
}

export default App;