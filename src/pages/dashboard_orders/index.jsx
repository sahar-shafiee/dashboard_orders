// node libraries
import React from 'react';
// components
import CustomTab from '../../components/custom/customTab';
import DashboardCard from './dashboardCard';

function Dashboard() {
    let browserWidth = window.innerWidth;
    return (
        <>
            {browserWidth <= 550 ?
                <div className="divDashboard">
                    <h3 className="divDashboard__h3">سفارش ها</h3>
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
                : <h1 className="h1Dashboard">لطفا سایز صفحه مرورگر را کوچک کنید و مرورگر را رفرش نمایید.</h1>}
        </>
    );
}
// export
export default Dashboard;