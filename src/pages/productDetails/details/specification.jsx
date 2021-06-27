// node libraries
import React from 'react';
// components
import { CustomLabel } from '../../../components/index';


const Specification = ({ product }) => {

    return (
        <div className="row mt-5">
            <div>
                <CustomLabel value={`${product && product.length > 0 && product[0].net_weight}`} label="وزن خالص" /><br />
                <CustomLabel value="دارد" label="بسته بندی" /><br />
                <CustomLabel value={`${product && product.length > 0 && product[0].weight_with_packing}`} label="وزن" /><br />
                <CustomLabel value={`${product && product.length > 0 && product[0].length_with_packing}`} label="تعداد" /><br />
                <CustomLabel value={`${product && product.length > 0 && product[0].attributes[0].value}`} label="رنگ" /><br />
                <CustomLabel value={`${product && product.length > 0 && product[0].description}`} label="توضیحات" /><br />
            </div>
        </div>
    )
}
// export
export default Specification;