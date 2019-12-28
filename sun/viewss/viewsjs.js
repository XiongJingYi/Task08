var box =document.getElementById('box');
var navigations = document.getElementById('nav').children;
var slider = document.getElementById('slider');
navigations[0].onclick=function(){
    slider.style.left="0px";
    this.style.backgroundColor="#000";
    this.style.color="#fff";
    navigations[1].style.backgroundColor="#fff";
    navigations[1].style.color="#000";
}
navigations[1].onclick=function(){
    slider.style.left="-200px";
    this.style.backgroundColor="#000";
    this.style.color="#fff";
    navigations[0].style.backgroundColor="#fff";
    navigations[0].style.color="#000";
}