
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

//var urlString ="https://vakinduphilliam.wixsite.com/kutter-discount-wars?d=7&c=KutterGame-7"; // Example URL
import wixLocationFrontend from "wix-location-frontend"; // PLACE ABOVE: $w.onReady(function ()
// var urlString = wixLocationFrontend.url;
import {local} from "wix-storage-frontend"; // PLACE ABOVE: $w.onReady(function () {
// local.setItem("key","value")
// INSTALL PACKAGES: wix-storage-frontend, wix-location-frontend, wix-stores-frontend

// $w.onReady(function ()

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


