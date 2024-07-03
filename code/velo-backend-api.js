

/********************  masterPage.js  **************************/

/**
 * Where to put code:
 * In the Wix Studio sidebar / Velo Sidebar (Wix Editor), select the Page code tab for frontend code,
 * and the Public &  backend tab for backend code
 */


// Add product to Cart button code: addProducts()

import {cart} from "wix-stores-frontend";

const products =[{
    productId: "",
    quantity: 2
}];

cart
.addProducts(products)
.then((updatedCart)=>{
    // products added to cart
    const cartId = updatedCart._id;
    const cartLineItems = updatedCart.lineItems;
})
.catch((error)=>{
    // products not added to cart
    console.error(error);
});




// Remove product from cart code: removeProduct()

import {cart} from "wix-stores-frontend";

const cartLineItemId =3;

cart
.removeProduct(cartLineItemId)
.then((updatedCart)=>{
    // product removed
    const cartLineItems = updatedCart.lineItems;
})
.catch((error)=>{
    // products not removed
    console.error(error);
});





// Cart coupon discount code: applyCoupon()

import {cart} from "wix-stores-frontend";

const couponCode = "KutterGame-15"; // For example, KutterGame-15 means value of discount is at 15%

cart
.applyCoupon(couponCode)
.then((updatedCart)=>{
    const couponDiscount = updatedCart.appliedCoupon.discountValue;
})
.catch((error)=>{
    console.error(error);
});





// Remove discount coupon code: removeCoupon()

import {cart} from "wix-stores-frontend";

cart
.removeCoupon()
.then((updatedCart)=>{
    const cartId = updatedCart._id;
    const cartLineItems = updatedCart.lineItems;
})
.catch((error)=>{
    console.error(error);
});





// Cart changed event code: onChange()

import {cart} from "wix-stores-frontend";

$w.onReady(function () {
    cart.onChange((changedCart) => {
        const cartId = changedCart._id;
        const cartLineItems = changedCart.lineItems;
    });
});




// Update cart item quantity: updateLineItemQuantity()

import {cart} from "wix-stores-frontend";

const cartLineItemIdx =2;
const quantityx = 10;

cart
.updateLineItemQuantity(cartLineItemIdx, quantityx)
.then((updatedCart)=>{
    // cart line item quantity updated
    const cartId = updatedCart._id;
    const cartLineItems = updatedCart.lineItems;
})
.catch((error)=>{
    // products not added to cart
    console.error(error);
});




// To capture current page url: wixLocationFrontend.url

import wixLocationFrontend from "wix-location-frontend";

var urlString = wixLocationFrontend.url;





// To store local browser data: wixStorageFrontend.setItem

import {local} from "wix-storage-frontend"; 

local.setItem("key","value")





// Cart checkout code: 

import {cart} from "wix-stores-frontend";

cart
.removeCoupon()
.then((updatedCart)=>{
    const cartId = updatedCart._id;
    const cartLineItems = updatedCart.lineItems;
})
.catch((error)=>{
    console.error(error);
});



