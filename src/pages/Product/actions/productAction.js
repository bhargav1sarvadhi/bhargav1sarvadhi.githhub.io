import { callAPI } from "../../../apis/callApi";
import { ActionTypes } from "../../../redux/constants/action-type";

export const fetchProductsAction = () => {
  return async (dispatch) => {
    try {
      const products = await callAPI("GET", "/products");
      dispatch({
        type: ActionTypes.FETCH_PRODUCTS,
        payload: products,
      });
    } catch (error) {
      console.error('Failed to fetch products:', error.message);
      dispatch({
        type: ActionTypes.FETCH_PRODUCTS_ERROR,
        payload: error.message,
      });
    }
  };
};

export const selectedProductAction = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
