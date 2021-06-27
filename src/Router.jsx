// node libreries
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
// methods
import { JwtDecode } from './utils/jwt/JwtDecode';
// import { signoutService } from './apis/services/userServices';
// components
// import DashboardM from './pages/dashboard';
import { DashboardM } from './pages/DashboardM/DashboardM';
import { DashboardMain } from './pages/DashboardM/DashBoardMain/DashboardMain';
// toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Router() {
  const [user, setUser] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const decodedToken = JwtDecode(token);
      localStorage.setItem("role", decodedToken.payload.role);
      const dateNow = Date.now() / 1000;
      if (decodedToken.payload.exp < dateNow) {
        localStorage.clear();
        // signoutService(decodedToken);
      } else {
        setUser(decodedToken.payload.unique_name);
      }
    }
  }, [token]);
  return (
    <Provider store={store}>

      <BrowserRouter>
        <ToastContainer />
        <DashboardM>
          <Route exact path="/" render={() => <DashboardM />} />
        </DashboardM>
      </BrowserRouter>
    </Provider>
  );
}

export default Router;
