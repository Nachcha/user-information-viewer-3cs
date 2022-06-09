import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom'
import HomePage from './pages/home/home-page';
import UserInfo from './pages/user/user-info';
import NotFound from './pages/404/404';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="user" element={<UserInfo />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    </Router>
  );
}

export default App;