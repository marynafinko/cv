
//Function for header to take up the window's height
$(document).ready(function() {
    $('.header').height($(window).height())
})

// Function to make the opened menu button to close itself when the mouse is outside of the menu area

$(function () {// Same as document.addEventListener("DOMContentLoaded")
    
    // Same as document.querySelector ("#navbarToggle").addEventListener ("blur")
    $("#navbarToggler").blur(function (event) { //#navbarToggle is an id of the menu button
        var screenWidth = window.innerWidth; //here we measure the browser screen width
        if (screenWidth < 991) {
            $("#navbarSupportedContent").collapse('hide');  //#collapsable-nav is the id of all menu items. collapse is the function from the bootstrap.     
        }       
    });
});