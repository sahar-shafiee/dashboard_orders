// node libraries
import React from 'react';
// components
import Specification from './specification';
import AboutProduct from './aboutProduct';
import Comments from './comments';
import { CustomTab } from '../../../components/index';

const Tabs = ({ product }) => {

    return (
        <div className="wrapperTabs mt-3 p-4">
            <CustomTab customTabClassWrapperTitle="wrapperLink" tab={[{
                title: "مشخصات",
                content: <Specification product={product} />
            },
            {
                title: "درباره محصول",
                content: <AboutProduct product={product} />
            },
            {
                title: "دیدگاه خریداران",
                content: <Comments product={product} />
            }]} />
        </div>
    )
}
// export
export default Tabs;