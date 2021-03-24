
var red = document.getElementById("red");
var green = document.getElementById("green");
var yellow = document.getElementById("yellow");
var blue = document.getElementById("blue");
var body= document.querySelector("body");

red.addEventListener("click",function(){
  document.querySelector("body").style.backgroundColor= "red";
});

green.addEventListener("click",function(){
    document.querySelector("body").style.backgroundColor= "green";
  });
  
yellow.addEventListener("click",function(){
    document.querySelector("body").style.backgroundColor= "yellow";
  });
  
blue.addEventListener("click",function(){
    document.querySelector("body").style.backgroundColor= "blue";
  });  


