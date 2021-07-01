// node libraries
import React, { useEffect, useState } from 'react';
// components
import { CustomBadge, CustomLabel } from '../../components';
// data
import { orders } from '../../utils/orders';
// methods
// import { ApiRegister } from '../../apis/services/apiRegister/ApiRegister';

function DashboardCard() {

    let [images, setImages] = useState([]);

    useEffect(() => {
        // const _handleRequestApi = async () => {

        //     let loadData = null;
        //     // let dataUrl = '/app/api/get-login-user/';
        //     let dataUrl = '/api/v1/product-page/details/jbl-wireless-headphones-model-450bt/';
        //     let response = await ApiRegister().apiRequest(loadData, 'get', dataUrl, false);
        //     setImages(response);//==> output: {}
        // }
        // _handleRequestApi();

    }, []);

    return (
        <div className="dashboardCard">
            <div className="dashboardCard__div">
                <h4>سفارش های تکمیل نشده</h4>
                {orders.length > 0 && orders.map((value, index) => {
                    return (
                        <div key={index} className="card">
                            <div className="card__header">
                                <CustomLabel value={value.orderNumber} label="شماره سفارش" />
                                <CustomBadge title={`${value.status}`} customBadgeClass="card__header--badge" />
                            </div>
                            <div className="card__customer">
                                <span>{`${value.customerName} ${value.customerFamily} - ${value.customerProvince},${value.customerCity}`}</span>
                            </div>
                            <CustomLabel value={`${value.orderDate}`} label="تاریخ ثبت سفارش" /><br />
                            <CustomLabel value={`${value.deadlineOrder}`} label="مهلت ارسال سفارش" /><br />
                            <CustomLabel value={`${value.numberOfProductItems}`} label="تعداد اقلام کالا" /><br />
                            <div className="card__image">
                                {images && images.map((value, index) => {
                                    return (
                                        index < 2 && <img key={index} src={value.url} alt={`${value.title}`} />
                                    );
                                })}
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