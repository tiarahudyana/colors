// LIGHT blue
$(".item-1").on("click", function(){
  event.preventDefault();
  // $("section").hide();
  $("div").css("background-color", "#3ad9ee");
  $("img.lblue-image-1").fadeIn(1900, function (){
    $("img.lblue-image-3").fadeIn(2200, function (){
      $("img.lblue-image-2").fadeIn(400, function (){
        $("img.lblue-image-4").fadeIn(1600);
      });
    });
  });
  $("section").hide();
});

$(".item-8").on("click", function(){
  $("section").hide();
  // $(".black-image-1").css("display", "block");
  // $(".black-image-2").css("display", "block");
  // $(".black-image-3").css("display", "block");
  // $(".black-image-4").css("display", "block");
  $("img.black-image-1").fadeIn(2900, function (){
    $("img.black-image-3").fadeIn(1200, function (){
      $("img.black-image-2").fadeIn(3400, function (){
        $("img.black-image-4").fadeIn(1600);
      });
    });
  });
});

$(".item-18").on("click", function(){
  $("section").hide();
  $("div").css("background-color", "#eeeeee");
  $("img.white-image-5").fadeIn(200);
  $("img.white-image-1").fadeIn(1900, function (){
    $("img.white-image-3").fadeIn(2200, function (){
      $("img.white-image-2").fadeIn(400, function (){
        $("img.white-image-4").fadeIn(1600);
      });
    });
  });
});
// COLOR: RED
$(".item-20").on("click", function(){
  $("section").hide();
  $("div").css("background-color", "#d40000");
  $("img.red-image-5").fadeIn(200);
  $("img.red-image-1").fadeIn(1900, function (){
    $("img.red-image-3").fadeIn(2200, function (){
      $("img.red-image-2").fadeIn(400, function (){
        $("img.red-image-4").fadeIn(1600);
      });
    });
  });
});
