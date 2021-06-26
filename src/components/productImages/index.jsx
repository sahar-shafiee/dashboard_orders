// node libraries
import React, { useState } from 'react';
// component
import Modal from './modal';
import ShowImages from './showImages';
/**
 * component of pruduct images
 * @param {string} productTitle => product Title
 * @param {string} originalPhoto => original photo
 * @param {array} thumbnailImages => thumbnail images is array of objects
 */
const ProductImages = ({
    productTitle,
    originalPhoto,
    thumbnailImages
}) => {

    let [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="col-12 firstImage">
                <img src={`https://nakhll.com${originalPhoto}`} alt={`${productTitle}`} />
            </div>
            <div className="col-12 imagesAlbum">
                {thumbnailImages !== undefined && thumbnailImages.map((value, index) => {
                    return (
                        <img key={index} src={`https://nakhll.com${value.image}`} alt={`${productTitle}`} />
                    );
                })}
                <button type="button" onClick={() => {
                    setShowModal(showModal => !showModal);
                }}>...</button>
            </div>
            <Modal show={showModal} onClose={() => {
                setShowModal(showModal => !showModal);
            }} content={<ShowImages productTitle={productTitle} OriginalPhoto={originalPhoto} thumbnailImages={thumbnailImages} />} />
        </>
    );
}
// export
export { ProductImages };