import React from "react"
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom"
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import UpdateProfile from "./UpdateProfile";
// import PrivateRoute from "./PrivateRoute";
// import ProtectedRoute from "./ProtectedRoute"
import { useAuth } from '../contexts/AuthContext'

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
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: '400px'}}>
          <Router>
          <AuthProvider>
            <Routes>
              {/* <PrivateRoute path="/" element={<Dashboard />} /> */}
              {/* <Route path="/" element={<Dashboard />} /> */}
              <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/update-profile" component={<UpdateProfile />} />
              </Route>

              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </AuthProvider>
          </Router>
        </div>
      </Container>
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
