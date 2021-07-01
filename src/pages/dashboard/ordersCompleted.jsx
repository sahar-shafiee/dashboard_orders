// node libraries
import React, { useEffect } from 'react';
// methods
import { ApiRegister } from '../../apis/services/apiRegister/ApiRegister';

const OrdersCompleted = () => {

    useEffect(() => {
        const _handleRequestApi = async () => {

            let loadData = null;
            let dataUrl = '/app/api/v1/factor/shop/Khatun/completed/';
            let response = await ApiRegister().apiRequest(loadData, 'get', dataUrl, false);
            console.log("res:", response);//==> output: {}
        }
        _handleRequestApi();

    }, []);

    return (
        <div>
            <h1>سفارشات تکمیل شده</h1>
        </div>
    );
}
// export
export default OrdersCompleted;