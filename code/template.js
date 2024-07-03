

let myElement = $w("#myElement");


let elementType = myElement.type; // "$w.Type"



$w.onReady(function () {
  $w("#myRepeatedImage").onClick((event) => {
    let $item = $w.at(event.context);
    $item("#myRepeatedText").text = "Selected";
  });
});



$w.onReady(function () {
  let pageTitle = $w("#page1").title;
});



// To add CSS to your site
// To get started, add a 'global.css' file in the CSS section of your Page Code.



let isHidden = $w("#myElement").hidden; // false


let backgroundOpts = $w("#myElement").background;

let bgSrc = backgroundOpts.src;
// "wix:image://v1/68d3a9_1de7529c444b4c9eb38401f8efe0cad2.jpg/flowers.jpg#originWidth=1970&originHeight=1120"



let myChildren = $w("#myContainer").children;

let firstChild = myChildren[0];



$w("#myContainer").onKeyPress((event) => {
  let keyboardKey = event.key; // "a"
});



$w("#myElement").onMouseIn((event) => {
  let clientX = event.clientX; // 362
  let clientY = event.clientY; // 244
  let offsetX = event.offsetX; // 10
  let offsetY = event.offsetY; // 12
  let pageX = event.pageX; // 362
  let pageY = event.pageY; // 376
  let screenX = event.screenX; // 3897
  let screenY = event.screenY; // 362
});



$w("#myElement").onClick((event) => {
  let targetId = event.target.id; // "myElement"
});




