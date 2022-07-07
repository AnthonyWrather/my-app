import React from "react"
import Signup from "./Signup";
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: '400px'}}>
          <Signup />
        </div>
      </Container>
    </AuthProvider>
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
