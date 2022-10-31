import logo from '../src/assets/BeBright-Logo.png';
import './App.css';
import { Route, Link, Routes, Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Timeline from './components/Timeline';
import ProfilePage from './components/ProfilePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Timeline />} />
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
