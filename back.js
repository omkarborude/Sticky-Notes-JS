var cont2 = document.getElementsByClassName("cont2")[0];
var cont3 = document.getElementsByClassName("cont3")[0];

var createBTN = document.getElementById('BTN');
var checkBTN = document.getElementById('checkBTN');
var cutBTN = document.getElementById('cutBTN');

var node0 = document.createElement("div");

var i = 0;

// opening notepad
createBTN.addEventListener("click", () => {
    if(cont3.style.display == "none"){
        cont3.style.display = "block";
      }
      else{
        cont3.style.display = "block";
      }
});
// cloasing notepad
cutBTN.addEventListener("click", () => {
    if(cont3.style.display = "block"){
        cont3.style.display = "none";
    }
    else {
        cont3.style.display = "none";
    }

});


