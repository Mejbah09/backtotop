var password = document.getElementById("password");
var password_eye = document.getElementById("password_eye");
var mood = document.getElementById("mode");

password_eye.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    password_eye.classList.add("fa-eye");
    password_eye.classList.remove("fa-eye-slash");
  } else {
    password.type = "password";
    password_eye.classList.remove("fa-eye");
    password_eye.classList.add("fa-eye-slash");
  }
});

mood.addEventListener("click", function () {
  document.body.classList.toggle("dark_mode");
  if (mood.classList.contains("fa-moon")) {
    mood.classList.add("fa-sun");
    mood.classList.remove("fa-moon");
  } else {
    mood.classList.remove("fa-sun");
    mood.classList.add("fa-moon");
  }
});

document.getElementById("bar").addEventListener("click", function () {
  document.getElementById("sidemenu").classList.toggle("active");
});

$(function () {
  // menu fixd//
  $(window).on("scroll", function () {

  

    var scrollSize = $(window).scrollTop();
    // console.log(scrollSize);
    if (scrollSize > 150) {
      $("nav").addClass("fixeed");
    } else {
      $("nav").removeClass("fixeed");
    }

    if(scrollSize>500){
      $('#backTotop').fadeIn(300);
     }else{
      $('#backTotop').hide(300);
     }
  });
  // preloder//
  $(window).on("load", function () {
    $("#preloder").fadeOut(1000);
  });

  $(".your-class").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<i class="fa-solid fa-chevron-left slide_icon"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right slide_icon"></i>',
    dotsClass:'dot_style',
  });

 $('#backTotop').on('click',function(){
  $('html , body').animate({
    scrollTop:0,
  })
 })
  
});
