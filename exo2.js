/*var button = document.getElementById("run");
var strong = document.querySelector("strong");
var body = document.querySelector("body");
var backg = document.querySelector("body").style.backgroundColor= "red";


button.addEventListener("click",function(){
    if(input != ""){
        var input = document.querySelector("input").value;
        strong.innerText = input ;
       
    }
}); */



var body = document.querySelector("body");
button = document.getElementById("run");



button.addEventListener("click",function(){
    if(parseInt(input.value) < 9 ){
        body.style.backgroundColor="red";   
    }
    else{
        body.style.backgroundColor="green";
    }

});