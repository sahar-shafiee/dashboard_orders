import { productTableData } from '../../../../utils/productTableData.js';
// function for find product
export function getProductData() {
    // get params
    let params = (new URL(document.location.href)).searchParams;
    // get id from url
    let id = params.get('id');
    // find object
    let data = productTableData.find(value => {
        return id && value.id === parseInt(id) ? value : ""
    });
    // return object
    return data;
}