
var color=[ "#ffa502", "#eccc68", "#ff7f50", "#ff6b81", "#ff4757", "#5352ed", "#7bed9f", "#2ed573", "#2f3542", "#ff5e57", "#d2dae2", "#f1c40f" ]

var input= document.querySelector("#hex");
var btn= document.querySelector('.btn');
var bg=document.querySelector('body');

btn.addEventListener('click', function(){
    var random= Math.floor(Math.random() * 12);
    bg.style.backgroundColor=color[random];
    input.value=color[random];
})