// node libraries
import React, { useState, useEffect } from 'react';
// methods
import { clickOnTabs } from './methods/clickOnTabs';

/**
 * component of custom badge
 * @param {array} tab => array of object
 * @param {string} classNameCustomTabWrapper => class name custom tab wrapper
 * @param {string} classNameCustomTabWrapperTitle => class name custom tab wrapper title
 * @param {string} classNameCustomTabTitle => class name custom tab title
 * @param {string} classNameCustomTabWrapperContent => class name custom tab wrapper content
 * @param {string} classNameCustomTabContent => class name custom tab content
 */
function CustomTab({
    tab,
    classNameCustomTabWrapper,
    classNameCustomTabWrapperTitle,
    classNameCustomTabTitle,
    classNameCustomTabWrapperContent,
    classNameCustomTabContent
}) {
    let [activeTab, setActiveTab] = useState("");

    useEffect(() => {
        setActiveTab("تکمیل نشده");
    }, []);

    return (
        <div
            className={
                `custom-tab-wrapper 
                ${classNameCustomTabWrapper !== undefined && classNameCustomTabWrapper}`
            }>
            <div
                className={
                    `custom-tab-wrapper-title 
                    ${classNameCustomTabWrapperTitle !== undefined && classNameCustomTabWrapperTitle}`
                }>
                {tab.length > 0 && tab.map((value, index) => {
                    return (
                        <span key={index}
                            className={
                                `custom-tab-title
                                ${activeTab.length > 0 && 'active-custom-tab-title'}
                            ${classNameCustomTabTitle !== undefined && classNameCustomTabTitle}`
                            } onClick={(event) => {
                                setActiveTab(value.title);
                                clickOnTabs(event);
                            }}>
                            {value.title}
                        </span>);
                })}
            </div>
            <div
                className={
                    `custom-tab-wrapper-content 
                    ${classNameCustomTabWrapperContent !== undefined && classNameCustomTabWrapperContent}`
                }>
                {tab.length > 0 && tab.map((value, index) => {
                    return (
                        <div key={index}
                            className={
                                `custom-tab-content 
                                ${classNameCustomTabContent !== undefined && classNameCustomTabContent}`
                            }>
                            {activeTab === value.title && value.content}
                        </div>);
                })}
            </div>
        </div>
    );
}
// export
export default CustomTab;