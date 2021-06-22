// node libraries
import React from 'react';

/**
 * component of custom badge
 * @param {string} title => title badge
 * @param {string} customBadgeClass => className for badge text
 * @param {string} customBadgeStyle => style for badge text
 * @param {string} backgroundColor => background color for badge text
 * @param {string} color => color for badge text
 * @param {string} otherProps => other props
 */
const CustomBadge = ({
    title,
    customBadgeClass,
    customBadgeStyle,
    backgroundColor,
    color,
    otherProps
}) => {
    return (
        <span className={`customBadge
        ${customBadgeClass !== undefined && customBadgeClass}`}
            style={{
                backgroundColor: backgroundColor,
                color: color,
                ...customBadgeStyle
            }}
            {...otherProps}
        >
            {title}
        </span>
    );
}
// export
export { CustomBadge };