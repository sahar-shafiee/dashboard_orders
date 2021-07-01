// node libraries
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
// components
import Tabs from './tabs';
import { CustomLabel, CustomBreadcrumbs, ProductImages, CustomSlider } from '../../../components/index';
import ProductCard from '../../productCard';
import Header from '../../../components/header';
// methods
import { ApiRegister } from '../../../apis/services/apiRegister/ApiRegister';
import { mapState } from './methods/mapState';
import { addBag } from '../../../redux/actions/shopingBag/action';

const Details = ({ addBag, count }) => {

    let [product, setProduct] = useState([]);

    useEffect(() => {
        const _handleRequestApi = async () => {

            let loadData = null;
            let dataUrl = '/api/v1/product-page/details/jbl-wireless-headphones-model-450bt/';
            let response = await ApiRegister().apiRequest(loadData, 'get', dataUrl, false);
            setProduct(response);//==> output: {}
        }
        _handleRequestApi();

    }, []);

    let sliderData = [];

    if (product && product.length > 0) {
        sliderData = product[0].related_products.map((value) => {
            return {
                imageUrl: `https://nakhll.com${value.image_thumbnail_url}`,
                unavailable: value.status,
                title: value.title,
                url: `https://nakhll.com${value.url}`,
                city: value.shop.state,
                chamberTitle: value.shop.title,
                chamberUrl: `https://nakhll.com${value.shop.url}`,
                rate: value.rate,
                commentCount: value.commentCount,
                discount: value.price,
                price: value.old_price,
                discountNumber: value.discount
            }
        });
    }

    return (
        <>
            <Header />
            <div className="wrapperDetails py-5">
                <CustomBreadcrumbs titles={product && product.length > 0 && [product[0].sub_market, product[0].shop]} />
                <div className="firstContent row p-4">
                    <div className="col-4 productImage">
                        <ProductImages productTitle={product && product.length > 0 && product[0].title} originalPhoto={product && product.length > 0 && product[0].image} thumbnailImages={product && product.length > 0 && product[0].banners} />
                    </div>
                    <div className="col-4 px-2 d-flex flex-column">
                        <h4>{product && product.length > 0 && product[0].title}</h4>
                        <div className="starRating">
                            <StarRatingComponent
                                name="rateProduct"
                                editing={false}
                                starCount={5}
                                value={4}
                                emptyStarColor={"#888888"}
                            />
                            <span>{`${product && product.length > 0 && product[0].comments.length} دیدگاه`}</span>
                        </div>
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
                        <button className="mt-4" onClick={() => {
                            addBag(count);
                        }}>افزودن به سبد خرید</button>
                        <hr />
                        <CustomLabel value={`${product && product.length > 0 && product[0].status}`} label="زمان ارسال" />
                        <CustomLabel value={`از ${product && product.length > 0 && product[0].shop.state}`} label="ارسال" />
                        <CustomLabel value={`${product && product.length > 0 && product[0].post_range.length === 0 && "ارسال به سرار کشور"}`} label="ارسال به" />
                    </div>
                </div>
                <Tabs product={product} />
                <div>
                    {product && product.length > 0 &&
                        <CustomSlider data={sliderData.map(value => {
                            return (
                                <ProductCard product={value} />
                            );
                        })} />}
                </div>
            </div>
        </>
    );
}
// export
export default connect(mapState, { addBag })(Details);