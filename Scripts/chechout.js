import { renderOrderSummary} from './Checkout/orderSummary.js';
import { renderPaymentSummary } from './Checkout/paymentSummary.js';
import { loadProducts } from '../data/products.js';
// import '../data/cart-class.js';
//import '../data/backend-practice.js';

new Promise(()=> {
  console.log('promise');
})
loadProducts(()=>{
  renderPaymentSummary();
  renderOrderSummary();
}); 



