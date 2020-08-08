$(document.getElementById("panel")).ready(function () {
  $(".login-info-box").fadeOut();
  $(".login-show").addClass("show-log-panel");
});

$('.login-reg-panel input[type="radio"]').on("change", function () {
  if ($("#log-login-show").is(":checked")) {
    $(".register-info-box").fadeOut();
    $(".login-info-box").fadeIn();

    $(".white-panel").addClass("right-log");
    $(".register-show").addClass("show-log-panel");
    $(".login-show").removeClass("show-log-panel");
  } else if ($("#log-reg-show").is(":checked")) {
    $(".register-info-box").fadeIn();
    $(".login-info-box").fadeOut();

    $(".white-panel").removeClass("right-log");

    $(".login-show").addClass("show-log-panel");
    $(".register-show").removeClass("show-log-panel");
  }
});

$(function () {
  // Sidebar toggle behavior
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar, #content").toggleClass("active");
  });
});

//
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $(".image-upload-wrap").hide();

      $(".file-upload-image").attr("src", e.target.result);
      $(".file-upload-input").attr("src", input.files[0].name);

      $(".file-upload-content").show();

      $(".image-title").html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    removeUpload();
  }
}

function removeUpload() {
  $(".file-upload-input").replaceWith($(".file-upload-input").clone());
  $(".file-upload-content").hide();
  $(".image-upload-wrap").show();
}
$(".image-upload-wrap").bind("dragover", function () {
  $(".image-upload-wrap").addClass("image-dropping");
});
$(".image-upload-wrap").bind("dragleave", function () {
  $(".image-upload-wrap").removeClass("image-dropping");
});
//
function readURL1(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $(".image-upload-wrap1").hide();

      $(".file-upload-image1").attr("src", e.target.result);
      $(".file-upload-content1").show();

      $(".image-title1").html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    removeUpload1();
  }
}

function removeUpload1() {
  $(".file-upload-input1").replaceWith($(".file-upload-input1").clone());
  $(".file-upload-content1").hide();
  $(".image-upload-wrap1").show();
}
$(".image-upload-wrap1").bind("dragover", function () {
  $(".image-upload-wrap1").addClass("image-dropping1");
});
$(".image-upload-wrap1").bind("dragleave", function () {
  $(".image-upload-wrap1").removeClass("image-dropping1");
});

///carterlera

var swiper = new Swiper(".product-slider", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: 2,
  loop: false,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  // mousewheel: {
  //     // invert: false
  // },
  on: {
    init: function () {
      var index = this.activeIndex;

      var target = $(".product-slider__item").eq(index).data("target");

      console.log(target);

      $(".product-img__item").removeClass("active");
      $(".product-img__item#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".product-slider__item").eq(index).data("target");

  console.log(target);

  $(".product-img__item").removeClass("active");
  $(".product-img__item#" + target).addClass("active");

  if (swiper.isEnd) {
    $(".prev").removeClass("disabled");
    $(".next").addClass("disabled");
  } else {
    $(".next").removeClass("disabled");
  }

  if (swiper.isBeginning) {
    $(".prev").addClass("disabled");
  } else {
    $(".prev").removeClass("disabled");
  }
});

$(".js-fav").on("click", function () {
  $(this).find(".heart").toggleClass("is-active");
});
