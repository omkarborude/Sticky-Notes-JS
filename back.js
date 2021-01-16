var cont2 = document.getElementsByClassName("cont2")[0];
var cont3 = document.getElementsByClassName("cont3")[0];

var createBTN = document.getElementById('#BTN');
var checkBTN = document.getElementById('#checkBTN');
var cutBTN = document.getElementById('#cutBTN');

var i = 0;

createBTN.addEventListener("click", function(){
    if(cont3.style.display == "none"){
        cont3.style.display = "block";
    }
});