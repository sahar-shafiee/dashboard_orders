// node libraries
import React from 'react';
// components
import { CustomTab } from '../../components';
import OrdersCompleted from './ordersCompleted';
import OrdersUncompleted from './ordersUncompleted';
import useViewport from '../../components/viewPort';
import { getImages } from '../../apis/getImages/getImages';

function Dashboard() {
    const { width } = useViewport();
    const breakpoint = 620;
    setTimeout(() => {
        getImages();
    }, 2000);

    return (
        <>
            {width < breakpoint ?
                <div className="dashboard">
                    <h3 className="dashboard__h3">سفارش ها</h3>
                    <CustomTab tab={[{
                        title: "تکمیل نشده",
                        content: <OrdersUncompleted />
                    },
                    {
                        title: "ارسال شده",
                        content: <OrdersCompleted />
                    }]} />
                </div>
                : <h1 className="dashboard__h1">لطفا سایز صفحه مرورگر را کوچک کنید و مرورگر را رفرش نمایید.</h1>}
        </>
    );
}
// export
export default Dashboard;