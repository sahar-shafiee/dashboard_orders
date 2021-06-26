// node libraries
import React from 'react';


const AboutProduct = ({ product }) => {
    return (
        <div className="row mt-5">
            <p>
                {product && product.length > 0 && product[0].story}
            </p>
        </div>
    )
}
// export
export default AboutProduct;