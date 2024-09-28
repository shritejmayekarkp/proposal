import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Proposal from './pages/Proposal';
import Contribute from './pages/Contribute';
import AuthRoutes from './AuthRoutes';
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />}>
      <Route element={<PrivateRoutes />}>

        <Route path="/" element={<Home />} />
        <Route path="/proposal/:id" element={<Proposal />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contribute/:id" element={<Contribute />} />
      </Route>
      <Route element={<AuthRoutes />}>
        <Route path="/login" element={<Login />} />

      </Route>


    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
