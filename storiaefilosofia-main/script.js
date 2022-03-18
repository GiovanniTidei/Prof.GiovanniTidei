// per lo scrolling
// $(document).ready(function() {
//     // Add smooth scrolling to all links
//     $("a").on('click', function(event) {

//         // Make sure this.hash has a value before overriding default behavior
//         if (this.hash !== "") {
//             // Prevent default anchor click behavior
//             event.preventDefault();

//             // Store hash
//             var hash = this.hash;

//             // Using jQuery's animate() method to add smooth page scroll
//             // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 800, function() {

//                 // Add hash (#) to URL when done scrolling (default click behavior)
//                 window.location.hash = hash;
//             });
//         } // End if
//     });
//     // counter

// });



//close youtube with x
//$(function() {
//   $('.close').click(function() {
//      $('iframe').attr('src', $('iframe').attr('src'));
//  });
//});
//BLOCCO pasww
var _0x517c = ["\x70\x72\x6F\x6A\x65\x63\x74"];
var cle = _0x517c[0]


function checkPassword() {

    if (passwordInput.value.match(cle)) {
        /*  document.getElementById("checkButton").innerHTML = "Accesso riuscito!"; */
        document.getElementById("check").classList.add("hidden2");

        document.querySelector('.hidden').classList.remove('hidden');
    } else {
        document.getElementById("checkButton").innerHTML = "Riprova";
    }
}



//YOUTUBE VIDEO
$('.play-button').click(function(e) {
    var iframeEl = $('<iframe>', { src: $(this).data('url') });
    $('#youtubevideo-F').attr('src', $(this).data('url'));
})

$('#close-video-F').click(function(e) {
    $('#youtubevideo-F').attr('src', '');
});

$(document).on('hidden.bs.modal', '#myModal-F', function() {

    $('#youtubevideo-F').attr('src', '');
});

$('.play-button').click(function(e) {
    var iframeEl = $('<iframe>', { src: $(this).data('url') });
    $('#youtubevideo-S').attr('src', $(this).data('url'));
})

$('#close-video-S').click(function(e) {
    $('#youtubevideo-S').attr('src', '');
});

$(document).on('hidden.bs.modal', '#myModal-S', function() {
    $('#youtubevideo-S').attr('src', '');
});

//close each audio when oneother play
document.addEventListener('play', function(e) {
    var audios = document.getElementsByTagName('audio');
    for (var i = 0, len = audios.length; i < len; i++) {
        if (audios[i] != e.target) {
            audios[i].pause();
        }
    }
}, true);

// When the user scrolls the page, execute myFunction
window.onscroll = function() { scrollProgress() };

function scrollProgress() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}


function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;


}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();