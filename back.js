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

    var stick = document.createElement("div");
    stick.id = 'stick';

    var trashBTN = document.createElement('button');
    trashBTN.innerHTML = '<i class="fas fa-border-none fa-trash-alt"></i>';
    trashBTN.id = 'trashBTN';

    var sticktext = document.createElement('h1');
    sticktext.id = 'sticktext';

    

    sticktext.innerHTML = getin;

    
    stick.style.background = stickcolor();
    trashBTN.style.background = stick.style.background;

    stick.appendChild(trashBTN);
    stick.appendChild(sticktext);

    cont2.insertAdjacentElement("beforeend",stick);
    
    document.getElementById('getin').value = '';

    // delete BTN
    trashBTN.addEventListener("click", () => {
        stick.remove();
    })
    
})


// change bg color randamly
function stickcolor() {
    var any_color = ["#3EADCF","#F1A7F1","#FFD8CB","#BBDBBE","#03C8A8","#F3E6E8"];
      
    if (i > any_color.length - 1) {
        i = 0 ;
    }

    return any_color[i++];

}