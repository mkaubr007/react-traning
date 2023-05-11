import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer} from './product-reducer';

const rootReducer = combineReducers({
    allProducts: productReducer,  
    product: selectedProductReducer
})

export default rootReducer;