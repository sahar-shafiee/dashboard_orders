// node libraries
import React, { useState, useEffect } from 'react';
// components
import Tabs from './tabs';
import { CustomLabel, CustomBreadcrumbs, ProductImages } from '../../../components/index';
// methods
import { ApiRegister } from '../../../apis/services/apiRegister/ApiRegister';

const Details = () => {

    let [product, setProduct] = useState([]);

    useEffect(() => {
        const _handleRequestApi = async () => {

            let loadData = null;
            let dataUrl = '/product';
            let response = await ApiRegister().apiRequest(loadData, 'get', dataUrl, false);
            setProduct(response);//==> output: {}
        }
        _handleRequestApi();

    }, []);

    return (
        <div className="wrapperDetails py-5">
            <CustomBreadcrumbs titles={product && product.length > 0 && [product[0].sub_market, product[0].shop]} />
            <div className="firstContent row p-4">
                <div className="col-4 productImage">
                    <ProductImages productTitle={product && product.length > 0 && product[0].title} originalPhoto={product && product.length > 0 && product[0].image} thumbnailImages={product && product.length > 0 && product[0].banners} />
                </div>
                <div className="col-4 px-2 d-flex flex-column">
                    <h4>{product && product.length > 0 && product[0].title}</h4>
                    <img src="" alt="viewpoint" className="w-50" />
                    <span><b>ویژگی های محصول :</b></span>
                    <CustomLabel value={`${product && product.length > 0 && product[0].net_weight}`} label="وزن خالص" />
                    <CustomLabel value="دارد" label="بسته بندی" />
                    <CustomLabel value={`${product && product.length > 0 && product[0].weight_with_packing}`} label="وزن" />
                    <CustomLabel value={`${product && product.length > 0 && product[0].length_with_packing}`} label="تعداد" />
                    <hr />
                    <CustomLabel value={`${product && product.length > 0 && product[0].shop.title}`} label="فروشنده" />
                    <CustomLabel value="ساعاتی پیش" label="آخرین بازدید حجره دار" />
                </div>
                <div className="col-4 px-5 d-flex flex-column">
                    <span><small>{product && product.length > 0 && product[0].price}</small> <b className="discountedPrice">{product && product.length > 0 && product[0].discount} تومان</b></span>
                    <span>رنگ : {product && product.length > 0 && product[0].attributes[0].value}</span>
                    <span className="colorProduct">{product && product.length > 0 && product[0].attributes[0].value}</span>
                    <button className="mt-4">افزودن به سبد خرید</button>
                    <hr />
                    <CustomLabel value={`${product && product.length > 0 && product[0].status}`} label="زمان ارسال" />
                    <CustomLabel value={`از ${product && product.length > 0 && product[0].shop.state}`} label="ارسال" />
                    <CustomLabel value={`${product && product.length > 0 && product[0].post_range.length === 0 && "ارسال به سرار کشور"}`} label="ارسال به" />
                </div>
            </div>
            <Tabs product={product} />
        </div>
    );
}
// export
export default Details;