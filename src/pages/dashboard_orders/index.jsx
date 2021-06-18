// node libraries
import React from 'react';
// components
import CustomTab from '../../components/custom/customTab';
import DashboardCard from './dashboardCard';

function Dashboard() {
    let browserWidth = window.innerWidth;
    return (
        <>
            {browserWidth <= 480 ?
                <div className="dashboardWrapper">
                    <h3 className="dashboardHeader">سفارش ها</h3>
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
                : <h1>لطفا سایز صفحه را کوچک کنید</h1>}
        </>
    );
}
// export
export default Dashboard;