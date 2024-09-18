// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Testimonials from './Components/Testimonials';
import UploadAndResult from './Components/UploadAndResult';
import Layout from './Layout';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false); {/* good */}

  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  }; 

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/testimonials" element={<Testimonials />} />  
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<SignUp />} /> {/* good */}
          <Route
            path="/upload"
            element={
              // <PrivateRoute>
                <UploadAndResult />
              // </PrivateRoute>
            }
          /> {/* good */}
          <Route path="*" element={<Navigate to="/" />} /> {/* good */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
