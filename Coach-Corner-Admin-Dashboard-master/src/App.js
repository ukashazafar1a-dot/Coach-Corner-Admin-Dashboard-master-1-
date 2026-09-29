import './App.css';
import Main from './Layout/Main';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CenterFeed from './Screens/CenterFeed/Index';
import Login from './Screens/Accounts/Login';
import Signup from './Screens/Accounts/Signup';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main/>,
    children:[
      {
        path: "/",
        element: <CenterFeed/>,
      },
      ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  }
]);
function App() {
  return (
    <>
        <RouterProvider router={router}/>   
    </>
  );
}

export default App;
