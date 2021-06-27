import React from 'react'

export const DashboardMain = () => {
    return (
        <>
        <div className="left-one">
        <div className="left-one-1">
            <i className="fas fa-cart-plus fa-3x" style={{color: "#007aff"}}></i>
            <h1>8</h1>
            <h4>سفارش ها تکمیل نشده</h4>
        </div>
        <div className="left-one-1">
            <i className="fas fa-user-clock fa-3x" style={{color: "#007aff"}}></i>
            <h1>8</h1>
            <h4>سفارش ها تکمیل نشده</h4>
        </div>
        <div className="left-one-1">
            <i className="far fa-comment-alt fa-3x" style={{color: "#007aff"}}></i>
            <h1>8</h1>
            <h4>سفارش ها تکمیل نشده</h4>
        </div>
        <div className="left-one-1">
            <i className="fas fa-wallet fa-3x" style={{color: "#007aff"}}></i>
            <h1>8</h1>
            <h4>سفارش ها تکمیل نشده</h4>
        </div>
    </div>
    <div className="left-two"></div>
    <div className="left-three">
        <div className="left-three-head">
            <h3 style={{margin: "1.5rem"}}>وضعیت محصول</h3>
        </div>
        <div className="left-three-content">
            <div className="">
                <h1 style={{display: "inline-block", color:" black", marginLeft: "0.5rem"}}>
                    8
                </h1>
                <h3 style={{display: "inline-block", color: "black"}}>عدد</h3>
                <h4>کالاهای فعال</h4>
            </div>
            <div className="">
                <h1 style={{display: "inline-block", color: "black", marginLeft: "0.5rem"}}>
                    0
                </h1>
                <h3 style={{display: "inline-block", color: "black"}}>عدد</h3>
                <h4>کالا های در حال اتمام</h4>
            </div>
            <div className="">
                <h1 style={{display: "inline-block", color: "black", marginLeft: "0.5rem"}}>
                    0
                </h1>
                <h3 style={{display: "inline-block", color: "black"}}>عدد</h3>
                <h4>کالاهای غیرفعال</h4>
            </div>
            <div className="">
                <h1 style={{display: "inline-block", color:" black", marginLeft: "0.5rem"}}>
                    0
                </h1>
                <h3 style={{display:" inline-block", color: "black"}}>عدد</h3>
                <h4>کالاهای ناموجود</h4>
            </div>
        </div>
    </div>
    <div className="left-three">
        <div className="left-three-head">
            <h3 style={{margin: "1.5rem"}}>وضعیت فروش</h3>
        </div>
        <div className="left-three-content">
            <div className="">
                <h1 style={{display: "inline-block", color:" black", marginLeft: "0.5rem"}}>
                    8,000,000
                </h1>
                <h3 style={{display: "inline-block", color: "black"}}>تومان</h3>
                <h4>
                    فروش هفته جاری
                </h4>
            </div>
            <div className="">
                <h1 style={{display:" inline-block", color: "black", marginLeft: "0.5rem"}}>
                    8,000,000
                </h1>
                <h3 style={{display: "inline-block", color: "black"}}>تومان</h3>
                <h4>فروش ماه گذشته</h4>
            </div>
            <div className="">
                <h1 style={{display: "inline-block", color: "black", marginLeft: "0.5rem"}}>
                    8,000,000
                </h1>
                <h3 style={{display: "inline-block", color: "black"}}>عدد</h3>
                <h4>فروش هفته گذشته</h4>
            </div>

        </div>
    </div>
    <div className="left-five">A5</div>
    </>
    )
}
