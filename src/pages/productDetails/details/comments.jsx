// node libraries
import React from 'react';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

const Comments = ({ product }) => {

    // get params
    let params = (new URL(document.location.href)).searchParams;
    // get id from url
    let id = params.get('id');

    return (
        <div className="row mt-5 commentsWrapper">
            <div className="colFirst col-3 d-flex flex-column">
                <span><strong> 4 </strong><small>از 5</small></span>
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
                <span>کیفیت محصول</span>
                <input type="range" name="quality" value="0" />
                <span>بسته بندی</span>
                <input type="range" name="package" value="0" />
                <span>ارزش غذایی</span>
                <input type="range" name="value" value="0" />
            </div>
            <div className="colSecond col-9 d-flex flex-column">
                <p>کسی تاکنون درباره این محصول دیدگاهی ارسال نکرده است.</p>
                <p style={{ color: "#838383" }}>اولین فردی باشید که درباره این محصول دیدگاهی ثبت کرده است.</p>
                <Link to={`/add-comments/?id=${id}`} className="linkButton w-25 align-self-center">افزودن دیدگاه</Link>
            </div>
        </div>
    )
}
// export
export default Comments;