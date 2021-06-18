// node libraries
import React from 'react';
// components
import CustomBadge from '../../components/custom/customBadge/index';
import CustomLabel from '../../components/custom/customLabel';
// data
import { orders } from '../../utils/orders';
// image
import armChair from '../../assets/image/dashboard/armChair.jpg';
import closets from '../../assets/image/dashboard/closets.jpg';
import library from '../../assets/image/dashboard/library.jpeg';

function DashboardCard() {
    return (
        <div className="dashboard-card-parent">
            <div className="dashboard-card-wrapper-card">
                <h4>سفارش های تکمیل نشده</h4>
                {orders.length > 0 && orders.map((value, index) => {
                    return (
                        <div key={index} className="wrapper-items">
                            <div className="wrapper-status">
                                <span>شماره سفارش :</span>
                                <span>{value.orderNumber}</span>
                                <CustomBadge title={`${value.status}`} classNameBage="classNameBage" />
                            </div>
                            <div className="wrapper-customer">
                                <span>{`${value.customerName} ${value.customerFamily} - ${value.customerProvince},${value.customerCity}`}</span>
                            </div>
                            <CustomLabel data={[
                                { label: "تاریخ ثبت سفارش", value: `${value.orderDate}` },
                                { label: "مهلت ارسال سفارش", value: `${value.deadlineOrder}` },
                                { label: "تعداد اقلام کالا", value: `${value.numberOfProductItems}` }
                            ]} />
                            <div className="wrapper-image">
                                <img src={closets} alt="product" />
                                <img src={armChair} alt="product" />
                                <img src={library} alt="product" />
                                <button>مشاهده سفارش</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
// export
export default DashboardCard;