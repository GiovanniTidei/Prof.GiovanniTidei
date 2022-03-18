  // nav2

  var button = document.getElementById("hamburger-menu"),
      span = button.getElementsByTagName("span")[0];

  button.onclick = function() {
      span.classList.toggle("hamburger-menu-button-close");

  };

  $("#hamburger-menu").on("click", toggleOnClass);



  function toggleOnClass(event) {
      var toggleElementId = "#" + $(this).data("toggle"),
          element = $(toggleElementId);

      //   document.getElementById("arrow").style.display = "none";

      element.toggleClass("on");
  }

  // close hamburger menu after click a
  $(".menu li a").on("click", function() {
      $("#hamburger-menu").click();
  });

  //   $(document).ready(function() {
  //       $("#arrow").hide(0).delay(800).fadeIn(2000)
  //   });