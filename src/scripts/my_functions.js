import { tns } from '../framework/tiny_slider/tiny-slider.js';

//sources: 
// https://stackoverflow.com/a/42118921
// https://webpack.js.org/guides/asset-modules/
// https://webpack.js.org/guides/dependency-management/#requirecontext
function importAll(r) {
    return r.keys().map(r);
}

function getRespObj(isresponsive = false) {
   return isresponsive ? {
        500: {
            items: 2,
            edgePadding: 0,
            gutter: 0
        },
        600: {
            items: 3,
            edgePadding: 0,
            gutter: 0
        },
        700: {
            items: 4,
            edgePadding: 0,
            gutter: 0
        },
        900: {
            items: 5,
            edgePadding: 0,
            gutter: 0
        },
        1000: {
            items: 6,
            edgePadding: 0,
            gutter: 0,
        }
    } : {};
}

function loadTNS(classname = ".my-slider") {
    if(document.querySelectorAll(classname).length > 0) {
        return tns({
            container: document.querySelectorAll(classname)[0],
            mode: "carousel",
            slideBy: "page",
            items: 3,
            swipeAngle: 15,
            startIndex: 0,
            edgePadding: 0,
            gutter: 0,
            speed: 300,
            autoplay: false,
            controls: false,
            arrowKeys: true,
            lazyload: true,
            touch: true,
            mouseDrag: true,
            autoWidth: false,
            center: false,
            fixedWidth: false,
            responsive: getRespObj(true)
        });
    }
}

export { importAll, loadTNS }