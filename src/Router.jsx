// node libreries
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
// methods
// import { JwtDecode } from './utils/jwt/JwtDecode';
// import { signoutService } from './apis/services/userServices';
// components
import Dashboard from './pages/dashboard';
import Details from './pages/productDetails/details';
import Chat from './pages/chat';
import Chatroom from './pages/chat/chatroom';
// toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Router() {
  // const [user, setUser] = useState("");
  // const token = localStorage.getItem("token");

  // useEffect(() => {
  //   if (token) {
  //     const decodedToken = JwtDecode(token);
  //     localStorage.setItem("role", decodedToken.payload.role);
  //     const dateNow = Date.now() / 1000;
  //     if (decodedToken.payload.exp < dateNow) {
  //       localStorage.clear();
  //       // signoutService(decodedToken);
  //     } else {
  //       setUser(decodedToken.payload.unique_name);
  //     }
  //   }
  // }, [token]);
  return (
    <Provider store={store}>

      <BrowserRouter>
        <ToastContainer />
        <Switch>
          <Route exact path="/" render={() => <Dashboard />} />
          <Route exact path="/product-details" component={Details} />
          <Route exact path="/login" component={Chat} />
          <Route exact path="/chatroom" component={Chatroom} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default Router;
