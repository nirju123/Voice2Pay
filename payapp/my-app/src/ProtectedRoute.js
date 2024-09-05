import { Outlet, Navigate } from 'react-router-dom'
import { isLoggedIn } from './Components/Function';
const ProtectedRoute = () => {
    
    return(
        isLoggedIn() ? <Outlet/> : <Navigate to="/"/>
    )
}

export default ProtectedRoute;
//////////////////////////////////
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import Products from './pages/Products'
// import Login from './pages/Login'
// import PrivateRoutes from './utils/PrivateRoutes'

// function App() {
//   return (
//     <div className="App">
//         <Router>
//           <Routes>
//             <Route element={<PrivateRoutes />}>
//                 <Route element={<Home/>} path="/" exact/>
//                 <Route element={<Products/>} path="/products"/>
//             </Route>
//             <Route element={<Login/>} path="/login"/>
//           </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';


// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       element={isLoggedIn() ? <Component /> : <Navigate to="/" />}
//     />
//   );
// };

// export default ProtectedRoute;