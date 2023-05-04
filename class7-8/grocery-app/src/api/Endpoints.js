import Constants from "./Contants";

const Endpoints = {
    CATEGORY_URL: `${Constants.BASE_URL}category`,
    SUBCATEGORY_BY_CAT_ID_URL: `${Constants.BASE_URL}subcategory/`,
    PRODUCTS_BY_CAT_ID_URL: `${Constants.BASE_URL}products/cat/`,
    PRODUCTS_BY_ID_URL: `${Constants.BASE_URL}products/`,
}
export default Endpoints;