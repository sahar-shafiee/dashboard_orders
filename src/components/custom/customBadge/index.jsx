// node libraries
import React from 'react';

/**
 * component of custom badge
 * @param {string} title => title badge
 * @param {string} classNameBage => className for badge text
 * @param {string} color => color for badge text
 * @param {string} backgroundColor => background color for badge text
 * @param {string} fontSize => font size for badge text
 */
function CustomBadge({
    title,
    classNameBage,
    color,
    backgroundColor,
    fontSize
}) {
    return (
        <span className={`custom-badge-span ${classNameBage !== undefined && classNameBage}`}
            style={{
                color: `${color !== undefined && color}`,
                backgroundColor: `${backgroundColor !== undefined && backgroundColor}`,
                fontSize: `${fontSize !== undefined && fontSize}`
            }}
        >
            {title}
        </span>
    );
}
// export
export default CustomBadge;