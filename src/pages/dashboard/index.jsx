// node libraries
import React from 'react';
// components
import { CustomTab } from '../../components';
import DashboardCard from './dashboardCard';

function Dashboard() {
    let browserWidth = window.innerWidth;
    return (
        <>
            {browserWidth <= 550 ?
                <div className="dashboard">
                    <h3 className="dashboard__h3">سفارش ها</h3>
                    <CustomTab tab={[{
                        title: "تکمیل نشده",
                        content: <DashboardCard />
                    },
                    {
                        title: "ارسال شده",
                        content: <div>
                            <span>داده ای موجود نیست</span>
                        </div>
                    }]} />
                </div>
                : <h1 className="dashboard__h1">لطفا سایز صفحه مرورگر را کوچک کنید و مرورگر را رفرش نمایید.</h1>}
        </>
    );
}
// export
export default Dashboard;