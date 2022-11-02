import './App.css';
import { Route, Link, Routes, Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Timeline from './components/Timeline';
import ProfilePage from './components/ProfilePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

import myDataProvider from './dataProvider';
import authProvider from './authProvider';

const dataProvider = myDataProvider('http://localhost:8086/api');

function App() {

  <Admin authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="users" {...usersConfiguration} />
  </Admin>

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route exact path="/timeline" element={<Timeline />} />
          <Route exact path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
