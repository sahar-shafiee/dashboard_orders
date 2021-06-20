// node libraries
import React from 'react';

/**
 * component of custom badge
 * @param {string} value => value of label
 * @param {string} label => label of label
 * @param {string} customLabelDiv => class name of div wrapper of labels
 * @param {string} customLabel => class name of span label
 * @param {string} customValue => class name of span value
 */
function CustomLabel({
    value,
    label,
    customLabelDiv,
    customLabel,
    customValue
}) {
    return (
        <div className=
            {`divLabel ${customLabelDiv !== undefined && customLabelDiv}`}
        >
            <span className={`divLabel__span--label ${customLabel !== undefined && customLabel}`}>
                {label}:
            </span>
            <span className={`divLabel__span--value ${customValue !== undefined && customValue}`}>
                {value}
            </span>
        </div>
    );
}
// export
export default CustomLabel;