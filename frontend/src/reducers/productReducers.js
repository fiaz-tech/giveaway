import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL ,
  PRODUCT_CREATE_CLAIMER_REQUEST,
  PRODUCT_CREATE_CLAIMER_SUCCESS,
  PRODUCT_CREATE_CLAIMER_FAIL,
  PRODUCT_CREATE_CLAIMER_RESET,
} from '../constants/productConstants'

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        
      }
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}


export const productDetailsReducer = (
  state = { product: {} },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true }
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload }
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}


export const productClaimerCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_CLAIMER_REQUEST:
      return { loading: true }
    case PRODUCT_CREATE_CLAIMER_SUCCESS:
      return { loading: false, success: true }
    case PRODUCT_CREATE_CLAIMER_FAIL:
      return { loading: false, error: action.payload }
    case PRODUCT_CREATE_CLAIMER_RESET:
      return {}
    default:
      return state
  }
}