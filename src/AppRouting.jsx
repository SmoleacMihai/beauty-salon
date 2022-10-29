import {
  Routes,
  Route
} from "react-router-dom";
import React, {useMemo, useState} from 'react';
import LoginPage from './pages/login';
import PublicPage from './pages/public';
import MainPage from './pages/main';
import OrderPage from "./pages/order";
import {FormData} from "./context/FormData"
import {OrderList} from "./context/orderList";

const AppRouting = () => {
  const [user, setUser] = useState(localStorage.getItem("isAuth"));
  const [formData, setFormData] = useState({
    "service-category":"",
    "service":"",
    "master":"",
    "date":"",
    "startsAt":"",
    "endsAt":"",
    "price":"",
    "currency":"",
    "clientName":"",
    "clientPhone":"",
    "clientEmail":"",
    "clientComment":""
  });
  const [orderList, setOrderList] = useState([]);
  const providerValue = useMemo(() => { return { formData, setFormData }}, [formData, setFormData]);
  const providerValueForOrderList = useMemo(() => { return {orderList, setOrderList}}, [orderList, setOrderList]);

  return (
    <>
      <FormData.Provider value={providerValue}>
        <OrderList.Provider value={providerValueForOrderList}>
          <Routes>
            <Route path="/main" element={<MainPage user={user}/>} />
            <Route path="/order" element={<OrderPage user={user}/>}/>
            <Route path="/login" element={<LoginPage handleAuth={setUser}/>} />
            <Route
                path="*"
                element={<PublicPage />}
            />
          </Routes>
        </OrderList.Provider>
      </FormData.Provider>
    </>
  );
};

export default AppRouting;