var body = document.querySelector("body");
var button = document.getElementById("run");


button.addEventListener("click",function(){
    var r = Math.floor(256*Math.random());
    var g = Math.floor(256*Math.random());
    var b = Math.floor(256*Math.random());
    document.querySelector("body").style.background = "rgba(" + r + "," + g + "," + b + ",1)";
});