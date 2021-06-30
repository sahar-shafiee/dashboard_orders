import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  BrowserRouter,
} from "react-router-dom";

import "./DashboardM.css";
import person from "./person.png";

import { DashboardMain } from "./DashBoardMain/DashboardMain";

export const DashboardM = () => {
  function Users() {
    return <h2>Users</h2>;
  }
  function Buy() {
    return <h2>Buy</h2>;
  }
  function Product() {
    return <h2>Product</h2>;
  }
  function Customer() {
    return <h2>customer</h2>;
  }
  function Customer() {
    return <h2>Customer</h2>;
  }
  return (
    <div className="wrapper">
      {/* <!-- Right  SideBar--> */}
      <div className="Right">
        <section className="info-card">
          <div className="info-card-pic">
            <div className="info-card-pic-person"></div>
          </div>
          <div className="info-card">
            <h1
              style={{
                paddingTop: "1.7rem",
                textAlign: "center",
                paddingBottom: "2.9rem",
              }}
            >
              حجره طلاسازی
            </h1>
          </div>
          <div className="info-card-btn">
            <div className="info-card-btn-one">
              <i className="far fa-envelope fa-2x"></i>
              <h4 style={{ textAlign: "center" }}>پیام ها</h4>
            </div>
            <div className="info-card-btn-one">
              <i className="fas fa-user-cog fa-2x"></i>
              <h4 style={{ textAlign: "center" }}>تنظیمات</h4>
            </div>
            <div className="info-card-btn-one">
              <i className="fas fa-sign-out-alt fa-2x"></i>
              <h4 style={{ textAlign: "center" }}>خروج</h4>
            </div>
          </div>
        </section>
        <section className="menu-card">
          <NavLink
            className="menu-card-item"
            activeClassName="selectNav"
            to="/admin"
          >
            <i className="fas fa-home fa-2x "></i>
            <h2>داشبورد</h2>
          </NavLink>
          <NavLink
            className="menu-card-item"
            activeClassName="selectNav"
            to="/buy"
          >
            <i className="fas fa-shopping-basket fa-2x"></i>
            <h2>سفارشات</h2>
          </NavLink>
          <NavLink
            className="menu-card-item"
            activeClassName="selectNav"
            to="/product"
          >
            <i className="fas fa-box-open fa-2x"></i>
            <h2>محصولات</h2>
          </NavLink>
          <NavLink
            className="menu-card-item non-item"
            activeClassName="selectNav"
            to="/customer"
          >
            <i className="fas fa-users fa-2x"></i>
            <h2>لیست مشتریان</h2>
          </NavLink>
          <NavLink
            className="menu-card-item non-item"
            activeClassName="selectNav"
            to="/Comments"
          >
            <i className="far fa-comment-dots fa-2x"></i>
            <h2>دیدگاه ها</h2>
          </NavLink>
          <NavLink
            className="menu-card-item"
            activeClassName="selectNav"
            to="/financial"
          >
            <i className="fas fa-dollar-sign fa-2x"></i>
            <h2>مالی</h2>
          </NavLink>
          <NavLink
            className="menu-card-item non-item"
            activeClassName="selectNav"
            to="/off"
          >
            <i className="fas fa-percent fa-2x"></i>
            <h2>کد تخفیف</h2>
          </NavLink>
          <NavLink
            className="menu-card-item"
            activeClassName="selectNav"
            to="/support"
          >
            <i className="fas fa-life-ring fa-2x"></i>
            <h2>پشتیبانی</h2>
          </NavLink>
        </section>
      </div>
      {/* <!-- Left --> */}
      <div className="left">
        <Switch>
          <Route path="/admin" component={DashboardMain}></Route>
          <Route path="/buy" component={Buy}></Route>
          <Route path="/product" component={Product}></Route>
          <Route path="/customer" component={Customer}></Route>
          <Route path="/support" component={Customer}></Route>
        </Switch>
      </div>

      <div className="menu-mobile">
        <NavLink
          className="menu-card-item-menu"
          activeClassName="selectNav-menu"
          to="/admin"
        >
          <i className="fas fa-home fa-2x " style={{marginTop:"1.2rem"}}></i>
          <h2 style={{marginTop:"1.2rem"}}>داشبورد</h2>
        </NavLink>
        <NavLink
          className="menu-card-item-menu"
          activeClassName="selectNav-menu"
          to="/buy"
        >
          <i className="fas fa-shopping-basket fa-2x" style={{marginTop:"1.2rem"}}></i>
          <h2 style={{marginTop:"1.2rem"}}>سفارشات</h2>
        </NavLink>
        <NavLink
          className="menu-card-item-menu"
          activeClassName="selectNav-menu"
          to="/product"
        >
          <i className="fas fa-box-open fa-2x" style={{marginTop:"1.2rem"}}></i>
          <h2 style={{marginTop:"1.2rem"}}>محصولات</h2>
        </NavLink>
        <NavLink
          className="menu-card-item-menu "
          activeClassName="selectNav-menu"
          to="/customer"
        >
          <i className="fas fa-users fa-2x" style={{marginTop:"1.2rem"}}></i>
          <h2 style={{marginTop:"1.2rem"}}>لیست مشتریان</h2>
        </NavLink>
        <NavLink
          className="menu-card-item-menu"
          activeClassName="selectNav-menu"
          to="/Comments"
        >
          <i className="far fa-comment-dots fa-2x" style={{marginTop:"1.2rem"}}></i>
          <h2 style={{marginTop:"1.2rem"}}>دیدگاه ها</h2>
        </NavLink>
       
        
        
      </div>
    </div>
  );
};
