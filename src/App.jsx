import {
  BrowserRouter as Router,
  Routes,
  Route, Navigate
} from "react-router-dom";
import React from 'react';
import LoginPage from './pages/login';
import PublicPage from './pages/public';
import MainPage from './pages/main';

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<PublicPage />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/main" element={
            localStorage.getItem("isAuth") ?
              <MainPage /> : <Navigate to="/" replace />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;