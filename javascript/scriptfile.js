//-------------- Sport ----------------------

let temp = "";
let images = document.getElementsByClassName("test");

function slideleft(){
    temp = images[4].src;
    images[4].src = images[3].src;
    images[3].src = images[2].src;
    images[2].src = images[1].src;
    images[1].src = images[0].src;
    images[0].src = temp;
}
function slideright(){
    temp = images[0].src;
    images[0].src = images[1].src;
    images[1].src = images[2].src;
    images[2].src = images[3].src;
    images[3].src = images[4].src;
    images[4].src = temp;
}

//------------- Nature ------------------------

let temp2 = "";
let images2 = document.getElementsByClassName("test2");

function slideleft2(){
    temp2 = images2[4].src;
    images2[4].src = images2[3].src;
    images2[3].src = images2[2].src;
    images2[2].src = images2[1].src;
    images2[1].src = images2[0].src;
    images2[0].src = temp2;
}
function slideright2(){
    temp2 = images2[0].src;
    images2[0].src = images2[1].src;
    images2[1].src = images2[2].src;
    images2[2].src = images2[3].src;
    images2[3].src = images2[4].src;
    images2[4].src = temp2;
}