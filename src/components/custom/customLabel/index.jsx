// node libraries
import React from 'react';

/**
 * component of custom badge
 * @param {array} data => array of object
 * @param {string} classNameParent => class name of div parent
 * @param {string} classNameWrapperLabels => class name of div wrapper of labels
 * @param {string} classNameItemLabel => class name of span label
 * @param {string} classNameItemValue => class name of span value
 */
function CustomLabel({
    data,
    classNameParent,
    classNameWrapperLabels,
    classNameItemLabel,
    classNameItemValue
}) {
    return (
        <div className=
            {`parent-custom-label ${classNameParent !== undefined && classNameParent}`}
        >
            {data.length > 0 && data.map((value, index) => {
                return (
                    <div key={index} className=
                        {`wrapper-each-label ${classNameWrapperLabels !== undefined && classNameWrapperLabels}`}
                    >
                        <span className={`item-label ${classNameItemLabel !== undefined && classNameItemLabel}`}>
                            {value.label}:
                        </span>
                        <span className={`item-value ${classNameItemValue !== undefined && classNameItemValue}`}>
                            {value.value}
                        </span>
                    </div>
                )
            })}
        </div>
    );
}
// export
export default CustomLabel;