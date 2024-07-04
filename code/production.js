
// Add product to Cart button code: addProducts()

import {cart} from "wix-stores-frontend";
// INSTALL NPM PACKAGES: wix-stores-frontend

// $w.onReady(function () {

// Capture product id using getProduct()
var productId = $w("#appleredPage")
.getProduct()
.then((product)=>{
    return product._id;
})
.catch((error)=>{
    return null;
});

// Capture product stock quantity using getQuantity()
var itemQuantity = $w("#appleredPage")
.getQuantity()
.then((productQuantity)=>{
    return productQuantity;
})
.catch((error)=>{
    return null;
});

var products =[{
    productId: productId,
    quantity: itemQuantity
}];

// Add product to cart using addProducts()
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

// });





// Remove product from cart code: removeProduct()

import {cart} from "wix-stores-frontend";
// INSTALL NPM PACKAGES: wix-stores-frontend

// $w.onReady(function () {

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

// });





// Update cart item quantity: updateLineItemQuantity()

import {cart} from "wix-stores-frontend";
// INSTALL NPM PACKAGES: wix-stores-frontend

// $w.onReady(function () {

const cartLineItemIdx =2;
const quantityx = 10;

// Update cart item quantity using updateLineItemQuantity()
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

// });





// Cart coupon discount code: applyCoupon()

import {cart} from "wix-stores-frontend";
import {local} from "wix-storage-frontend";
// INSTALL NPM PACKAGES: wix-stores-frontend, wix-storage-frontend

// $w.onReady(function () {

var discount = local.getItem("discountNumber");
var discountCoupon = local.getItem("discountCoupon"); // Coupon obtained from game play

const couponCode = discountCoupon; // For example, KutterGame-15 means value of discount is at 15%

cart
.applyCoupon(couponCode)
.then((updatedCart)=>{
    const couponDiscount = updatedCart.appliedCoupon.discountValue;
})
.catch((error)=>{
    console.error(error);
});

// });





// Remove discount coupon code: removeCoupon()

import {cart} from "wix-stores-frontend";
// INSTALL NPM PACKAGES: wix-stores-frontend

// $w.onReady(function () {

cart
.removeCoupon()
.then((updatedCart)=>{
    const cartId = updatedCart._id;
    const cartLineItems = updatedCart.lineItems;
})
.catch((error)=>{
    console.error(error);
});

// });





// Capture discount and coupon from URL parameters

/** METHOD 1

function getParameters(){
    let urlString ="https://vakinduphilliam.wixsite.com/kutter-discount-wars?d=0&c=KutterGame-0";
    let paramString = urlString.split('?')[1];
    let queryString = new URLSearchParams(paramString);

    for(let pair of queryString.entries()){
        if(pair[0]=='d'){
            //console.log(`discount:${pair[1]}`)
            localStorage.setItem("discountNumber", pair[1]);
        } else if (pair[0]=='c'){
            //console.log(`coupon:${pair[1]}`)
            localStorage.setItem("discountCoupon", pair[1]);
        }
    }

}
getParameters();

*/



// METHOD 2: BEST BEST BEST

// To capture current page url: wixLocationFrontend.url

//var urlString ="https://vakinduphilliam.wixsite.com/kutter-wars?d=7&c=KutterGame-7"; // Example URL
import wixLocationFrontend from "wix-location-frontend";
import {local} from "wix-storage-frontend";
// INSTALL NPM PACKAGES: wix-storage-frontend, wix-location-frontend

// $w.onReady(function () {

var urlString = wixLocationFrontend.url; // var urlString = window.location.href; // html equivalent

var paramString = urlString.split('?')[1];
var queryString = new URLSearchParams(paramString);

for(let pair of queryString.entries()){
    if(pair[0]=='d'){
        $w('#discountBar').text(`${pair[1]}% Discount on total purchases!`); // localStorage.setItem("discountNumber", pair[1]); // html equivalent
        local.setItem("discountNumber", pair[1]);
    } else if (pair[0]=='c'){
        $w('#discountCoupon').text(`${pair[1]}`); // localStorage.setItem("discountCoupon", pair[1]); // html equivalent
        local.setItem("discountCoupon", pair[1]);
    }
}

// });


