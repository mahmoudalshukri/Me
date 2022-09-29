// color panel with local storage js start
let colorPanel = document.querySelector('.color-panel');
let colorBtn = document.querySelector('.color-btn');
let colors = document.querySelectorAll('.color');
let colorize = document.getElementsByClassName('colorize');
let colorizeBorder = document.getElementsByClassName('colorize-border');
let colorizeLine = document.getElementsByClassName('colorize-line');
let colorizeLineLink = document.getElementsByClassName('colorize-line-link');
let menu = document.getElementById('menu');
let rMenu = document.getElementById('rmenu');
let links = menu.getElementsByClassName('link');
let resLinks = rMenu.getElementsByClassName('res-link');
let resColorizeLineLink = document.getElementsByClassName('res-colorize-line-link');
colorBtn.onclick = function(){
    colorPanel.classList.toggle('color-panel-toggle')
}
    let currentColor = '#5e9e9f';
    let clr = '#5e9e9f';
    for (let i = 0; i < colors.length; i++) {
        colors[i].onclick = function (){
            currentColor = window.getComputedStyle(colors[i]).backgroundColor;
            clr = currentColor;
                for(let j = 0; j < colorize.length; j++){
                    colorize[j].style.backgroundColor = currentColor;
                }
                for(let j = 0; j < colorizeBorder.length; j++){
                    colorizeBorder[j].style.borderColor = currentColor;
                }
                for(let j = 0; j < colorizeLine.length; j++){
                    colorizeLine[j].style.color = currentColor;
                }
                for(let j = 0; j < colorizeLineLink.length; j++){
                    colorizeLineLink[j].style.color = currentColor;
                }
                for(let j = 0; j < resColorizeLineLink.length; j++){
                    resColorizeLineLink[j].style.color = currentColor;
                }
                elem.style.setProperty('--box-After',currentColor);
        }
    }
        // navbar js start
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("colorize-line-link");
        current[0].className = current[0].className.replace("colorize-line-link", "");
        this.className += " colorize-line-link";
        this.style.setProperty('--hover-color',clr);
    });
    links[i].addEventListener("mouseover", mouseOver);
    links[i].addEventListener("mouseout", mouseOut);
    function mouseOver() {
        links[i].style.color = clr;
    }
    function mouseOut(){
        if(links[i].classList[2] === "colorize-line-link"){
            for(let j = 0; j < links.length; j++){
                if(links[j] === links[i]){
                    links[j].style.color = clr;
                }else{
                    links[j].style.color = '#fff';
                }
            }
        }else{
            links[i].style.color = '#fff';
        }
    }     
}
        // navbar js end
    // custom color element js end
// color panel with local storage js end
// responsive menu js start
let bar = document.querySelector('.bar');
let resMenu = document.querySelector('.res-menu');
let span1 = document.querySelector('.one');
let span2 = document.querySelector('.two');
let span3 = document.querySelector('.three');
let special = document.querySelector('.special');
bar.onclick = function(){
    resMenu.classList.toggle('res-menu-toggle');
    span2.classList.toggle('rotate');
    special.classList.toggle('-rotate');
    span1.classList.toggle('hide');
    span3.classList.toggle('hide');
}
for (let i = 0; i < resLinks.length; i++) {
    resLinks[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("res-colorize-line-link");
        current[0].className = current[0].className.replace("res-colorize-line-link", "");
        this.className += " res-colorize-line-link";
        this.style.setProperty('--res-hover-color',clr);
        resMenu.classList.toggle('res-menu-toggle');
        span2.classList.toggle('rotate');
        special.classList.toggle('-rotate');
        span1.classList.toggle('hide');
        span3.classList.toggle('hide');
    });
    resLinks[i].addEventListener("mouseover", mouseOver);
    resLinks[i].addEventListener("mouseout", mouseOut);
    function mouseOver() {
        resLinks[i].style.color = clr;
    }
    function mouseOut(){
        if(resLinks[i].classList[2] === "res-colorize-line-link"){
            for(let j = 0; j < resLinks.length; j++){
                if(resLinks[j] === resLinks[i]){
                    resLinks[j].style.color = clr;
                }else{
                    resLinks[j].style.color = '#fff';
                }
            }
        }else{
            resLinks[i].style.color = '#fff';
        }
    }     
}
// responsive menu js end

filter("all");
function filter(c){
    let x, i;
    x = document.getElementsByClassName("work-container");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}
function addClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
        }
}
function removeClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
let btnContainer = document.getElementById("filters");
let btns = btnContainer.getElementsByClassName("btn");
    for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}