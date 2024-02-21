// alert("Welcome");

    var numberOfButtons = document.querySelectorAll(".drum").length;
    
    for (var i = 0; i < numberOfButtons; i++) {
    
            document.querySelectorAll(".drum")[i].addEventListener("click", function () {
            alert("I got tickled");
    });
    }
    

// document.querySelector(".a").addEventListener("click", function() {
//     alert("a got tickled");
// });
// document.querySelector(".s").addEventListener("click", function() {
//     alert("s got tickled");
// });
// document.querySelector(".d").addEventListener("click", function() {
//     alert("d got tickled");
// });
// document.querySelector(".j").addEventListener("click", function() {
//     alert("j got tickled");
// });document.querySelector(".k").addEventListener("click", function() {
//     alert("k got tickled");
// });
// document.querySelector(".l").addEventListener("click", function() {
//     alert("L got tickled");
// });
