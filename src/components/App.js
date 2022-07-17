import React from "react"
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom"
// import PrivateRoute from "./PrivateRoute";
// import ProtectedRoute from "./ProtectedRoute"
import { useAuth } from '../contexts/AuthContext'
import Signup from "./authentication/Signup";
import Login from "./authentication/Login";
import Profile from "./authentication/Profile";
import UpdateProfile from "./authentication/UpdateProfile";
import ForgotPassword from "./authentication/ForgotPassword";
import CentredContainer from "./authentication/CentredContainer"
import Dashboard from "./drive/Dashboard"

function App() {
  const ProtectedRoute = ({
    redirectPath = '/login',
    children,
  }) => {
    const { currentUser } = useAuth()

    if (!currentUser) {
      return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
  };


  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Drive Functions */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard />} >
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="folder" element={<Dashboard />} >
                <Route path=":folderId" element={<Dashboard />} />
              </Route>
            </Route>
          </Route>

          {/* Profile */}
          <Route element={<ProtectedRoute />}>
            <Route path="/user" element={<Profile />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
          </Route>

          {/* Auth */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

// function App() {
//   return (
//     <Container
//       className="d-flex align-items-center justify-content-center"
//       style={{ minHeight: "100vh" }}
//     >
//       <div className="w-100" style={{ maxWidth: "400px" }}>
//         <Router>
//           <AuthProvider>
//             <Switch>
//               <PrivateRoute exact path="/" component={Dashboard} />
//               <PrivateRoute path="/update-profile" component={UpdateProfile} />
//               <Route path="/signup" component={Signup} />
//               <Route path="/login" component={Login} />
//               <Route path="/forgot-password" component={ForgotPassword} />
//             </Switch>
//           </AuthProvider>
//         </Router>
//       </div>
//     </Container>
//   )
// }


export default App;
