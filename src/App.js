

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./Context/AuthProvider";
import Appointment from './Page/Appointment/Appointment/Appointment';
import Home from './Page/Home/Home/Home';
import Login from "./Page/Login/Login/Login";
import PrivateRoute from "./Page/Login/PrivateRoute/PrivateRoute";
import Register from "./Page/Login/Register/Register";
import DashBoard from "./Page/DashBoard/DashBoard/DashBoard";
import DashboardHome from "./Page/DashBoard/DashboardHome/DashboardHome";
import Payment from "./Page/DashBoard/Payment/Payment";
import MakeAdmin from "./Page/DashBoard/MakeAdmin/MakeAdmin";
import AddDoctor from "./Page/DashBoard/AddDoctor/AddDoctor";
import AdminRoute from "./Page/Login/AdminRoute/AdminRoute";
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Routes>
        <Route exact path='/' element={<Home />}>
            
          </Route>
          <Route path="/appointment" element={<PrivateRoute><Appointment/></PrivateRoute>}>
           
          </Route>
            <Route path="/dashboard" element={<PrivateRoute><DashBoard /></PrivateRoute>}>
            <Route exact path={'/dashboard'} element={<DashboardHome/>}/>
        <Route path={'/dashboard/:payment/:appointmentId'} element={<Payment/>}/>
        <Route path={'/dashboard/makeAdmin'} element={<AdminRoute><MakeAdmin/></AdminRoute>}/>
        <Route path={'/dashboard/addDoctor'} element={<AdminRoute><AddDoctor/></AdminRoute>}/>
          </Route>

        <Route path='/home' element={<Home />}>    
         </Route>
        <Route path='/login' element={<Login/>}>    
          </Route>
        <Route path='/register' element={<Register/>}>      
          </Route>
        
        </Routes>

      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
