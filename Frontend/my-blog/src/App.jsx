import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';
import PrivateRoute from './components/admin/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Publiczne ścieżki */}
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<Login />} />
        
        {/* Chronione ścieżki administracyjne */}
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;