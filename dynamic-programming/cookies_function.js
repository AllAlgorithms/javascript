# Useful Functions to create , read and delete the cookies.

(function( $ ) {
    "use strict";

function createCookie(name, value, days) {
	
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

// How to Create Cookies?
createCookie('el_data', 'Prajakta');


function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0)
            return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

// How to read cookies?
var name = readCookie('el_data');

function eraseCookie(name) {
    createCookie(name, "", -1);
}   

// How to delete cookies?
eraseCookie('el_data');

})( jQuery );
