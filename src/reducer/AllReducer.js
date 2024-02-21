import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAILURE,
  CLEAR_ERRORS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_FAILURE,
  LOAD_USER_SUCCESS,
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAILURE,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAILURE,
  ALL_SELLER_REQUEST,
  ALL_SELLER_SUCCESS,
  ALL_SELLER_FAILURE,
  ALL_BUYER_REQUEST,
  ALL_BUYER_SUCCESS,
  ALL_BUYER_FAILURE,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAILURE,
} from "../constant/AllConstant";

export const AllProducts = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCTS_REQUEST:
      case ALL_USERS_REQUEST:
        case ALL_SELLER_REQUEST:
          case ALL_BUYER_REQUEST:
            case ALL_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };

    case ALL_PRODUCTS_SUCCESS:
      case ALL_USERS_SUCCESS:
        case ALL_SELLER_SUCCESS:
          case ALL_BUYER_SUCCESS:
            case ALL_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        users:action.payload,
        sellers:action.payload,
        buyers:action.payload,
        prdDetails: action.payload
      };

    case ALL_PRODUCTS_FAILURE:
      case ALL_USERS_FAILURE:
        case ALL_SELLER_FAILURE:
          case ALL_BUYER_FAILURE:
            case ALL_PRODUCTS_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const LoginRequest = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
    
      };

    case LOGIN_SUCCESS:
    case LOAD_USER_SUCCESS:
      return {
        loading: false,
        isAuthenticated: true,
        user: action.payload,
        
      };

    case LOGIN_FAILURE:
      return {
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      };

    case LOAD_USER_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case CLEAR_ERRORS:

      return {
        error: null,
        ...state,
      };

    default:
      return state;
  }
};


export const AllOrders = (state={allData:[]},action)=>{

  switch (action.type) {
    case ORDER_REQUEST:
      return{
        loading:true,
        orders:[]
      }
      
    case ORDER_SUCCESS:
      return{
        loading:false,
        orders:action.payload
      }

    case ORDER_FAILURE:
      return{
        error:action.payload,
        loading:false,
      }
  
    default:
     return state
  }

};



export const AdminDelete = (state={},action)=>{
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return{
        ...state,
        loading: true,
      }

    case PRODUCT_DELETE_SUCCESS:
      return{
        loading:false,
        ...state,
        isDeleted:action.payload,
      }

    case PRODUCT_DELETE_FAILURE:
      return{
        loading:false,
        ...state,
        isDeleted:false
      }      
    
    case CLEAR_ERRORS:
      return{
        ...state,
        error:null
      }
  
    default:
      return state
  }

}