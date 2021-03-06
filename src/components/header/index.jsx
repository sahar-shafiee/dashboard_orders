// node libraries
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// image
import logo from '../../assets/image/logo.jpg';
import bag from '../../assets/image/bag.png';
import user from '../../assets/image/user.png';
// methods
import { mapState } from './methods/mapState';

const Header = ({ count }) => {
    return (
        <div className="header row">
            <img className="col-4 logo" src={logo} alt="logo" />
            <div className="col-7 d-flex flex-column searchBar pt-3">
                <div className="col-12 links">
                    <Link to="">نخل شما</Link>
                    <Link to="">فروش ویژه</Link>
                    <Link to="">پیشنهادهای شگفت انگیز</Link>
                    <Link to="">سوالات متداول</Link>
                    <Link to="">بخش پشتیبانی</Link>
                </div>
                <div className="col-12 wrapperSearch">
                    <div className="search">
                        <input id="search" type="text" placeholder="جستجو در کالاها" onKeyPress={(event) => {
                            if (event.code === "NumpadEnter") {
                                document.querySelector("button[type=button]").click();
                            }
                        }} />
                        <button type="button" onClick={() => {
                            let inputSearch = document.getElementById("search").value;
                            console.log("input search value", inputSearch);
                        }}>جستجو</button>
                    </div>
                </div>
            </div>
            <div className="col-1 user">
                <img src={user} alt="user" />
                <div className="d-flex flex-column">
                    <Link to="">ورود</Link>
                    <Link to="">عضویت</Link>
                </div>
            </div>
            <div className="divider"></div>
            <div className="col-1 bag">
                <img src={bag} alt="bag" />
                <span>{count}</span>
            </div>
        </div>
    );
}
// export
export default connect(mapState)(Header);