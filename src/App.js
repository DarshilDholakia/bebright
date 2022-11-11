import './App.css';
import './css/SignUpPage.css';
import { Route, Link, Routes, Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Timeline from './components/Timeline/Timeline';
import ProfilePage from './components/ProfilePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import { useEffect, useState } from 'react';

function App() {

  // const [authenticated, setAuthenticated] = useState(false);

  // useEffect(() => {

  // }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/timeline" element={<Timeline />} />
          <Route exact path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
