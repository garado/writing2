function fadeOne() {
    var action = document.getElementsByClassName("load1")[0];
    action.classList.toggle('fadeIn');
}

function fadeTwo() {
    var action = document.getElementsByClassName("load2")[0];
    action.classList.toggle('fadeIn');
}

function fadeThree() {
    var action = document.getElementsByClassName("load3")[0];
    action.classList.toggle('fadeIn');
}

function fadeFour() {
    var action = document.getElementsByClassName("load4")[0];
    action.classList.toggle('fadeIn');
    var action = document.getElementsByClassName("load5")[0];
    action.classList.toggle('fadeIn');
    var action = document.getElementsByClassName("load6")[0];
    action.classList.toggle('fadeIn');
    var action = document.getElementsByClassName("load7")[0];
    action.classList.toggle('fadeIn');
    var action = document.getElementsByClassName("load8")[0];
    action.classList.toggle('fadeIn');
    var action = document.getElementsByClassName("load9")[0];
    action.classList.toggle('fadeIn');
    var action = document.getElementsByClassName("load10")[0];
    action.classList.toggle('fadeIn');
    var action = document.getElementsByClassName("load11")[0];
    action.classList.toggle('fadeIn');
}

// display particles as background
window.onload = function() {
    setTimeout(fadeOne, 500);
    setTimeout(fadeTwo, 560);
    setTimeout(fadeThree, 640);
    setTimeout(fadeFour, 1000);
};