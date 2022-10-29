import {
  Routes,
  Route
} from "react-router-dom";
import React, {useState} from 'react';
import LoginPage from './pages/login';
import PublicPage from './pages/public';
import MainPage from './pages/main';
import OrderPage from "./pages/order";

const AppRouting = () => {
  const [user, setUser] = useState(localStorage.getItem("isAuth"));

  console.log(user);
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage handleAuth={setUser}/>} />
        <Route path="/main" element={<MainPage user={user}/>} />
        <Route path="/order" element={<OrderPage user={user}/>}/>
        <Route
            path="*"
            element={<PublicPage />}
        />
      </Routes>
    </>
  );
};

export default AppRouting;