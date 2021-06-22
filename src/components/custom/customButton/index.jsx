import React, { Fragment } from 'react';
/**
 * 
 * @param {*title => string} props 
 * @param {*onclick => function} props
 * @returns کاستوم کامپوننت دکمه
 */

const CustomButton = (props) => {

    return (
        <Fragment>
            <button className={'container'} {...props}>{props.title}</button>
        </Fragment>
    )
}

export { CustomButton };