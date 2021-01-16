var cont2 = document.getElementsByClassName("cont2")[0];
var cont3 = document.getElementsByClassName("cont3")[0];
var getin = document.getElementById('getin').value;

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

// creating div for note
checkBTN.addEventListener("click", () => {
    var getin = document.getElementById('getin').value;

    var node0 = document.createElement("div");
    node0.id = 'stick';

    var node1 = document.createElement('h1');
    node1.id = 'sticktext';

    node1.innerHTML = getin;

    node0.appendChild(node1);

    cont2.insertAdjacentElement("beforeend",node0);

    
})

