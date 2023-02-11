// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// When user moves mouse to the left of the page, button moves to the left too and opposite
window.onmousemove = function() {showCoords()};

// Preveri kako deluje na manjših ekranih!!
function showCoords() {
    var x = event.clientX;
    if (x < 600) {
        document.getElementById("myBtn").style.left = "30px";
               document.getElementById("myBtn").style.removeProperty ("right");
    } else {
        document.getElementById("myBtn").style.right = "30px";
                document.getElementById("myBtn").style.removeProperty ("left");
    }
//    console.log(x);
}
