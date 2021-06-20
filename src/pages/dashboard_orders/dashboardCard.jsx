// node libraries
import React, { useEffect, useState } from 'react';
// components
import CustomBadge from '../../components/custom/customBadge/index';
import CustomLabel from '../../components/custom/customLabel';
// data
import { orders } from '../../utils/orders';
// methods
import { ApiRegister } from '../../apis/services/apiRegister/ApiRegister';
// toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DashboardCard() {

    let [images, setImages] = useState([]);

    useEffect(() => {
        const _handleRequestApi = async () => {

            let loadData = null;
            let dataUrl = '/photos';
            let response = await ApiRegister().apiRequest(loadData, 'get', dataUrl, false);
            setImages(response);//==> output: {}
        }
        _handleRequestApi();

    }, []);

    return (
        <div className="divDashboardCard">
            <div className="divDashboardCard__div">
                <ToastContainer />
                <h4>سفارش های تکمیل نشده</h4>
                {orders.length > 0 && orders.map((value, index) => {
                    return (
                        <div key={index} className="divCard">
                            <div className="divCard__divHeader">
                                <CustomLabel value={value.orderNumber} label="شماره سفارش" />
                                <CustomBadge title={`${value.status}`} customBadgeClass="divCard__divHeader--badge" />
                            </div>
                            <div className="divCard__customer">
                                <span>{`${value.customerName} ${value.customerFamily} - ${value.customerProvince},${value.customerCity}`}</span>
                            </div>
                            <CustomLabel value={`${value.orderDate}`} label="تاریخ ثبت سفارش" /><br />
                            <CustomLabel value={`${value.deadlineOrder}`} label="مهلت ارسال سفارش" /><br />
                            <CustomLabel value={`${value.numberOfProductItems}`} label="تعداد اقلام کالا" /><br />
                            <div className="divCard__image">
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