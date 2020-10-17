window.onload = function () {
  $(".navbarBtn").animate(
    { opacity: 1 },
    {
      queue: false,
      duration: 1000,
    }
  );
  $(".navbarBtnTwo").animate(
    { opacity: 1 },
    {
      queue: false,
      duration: 1000,
    }
  );
  $(".container-navbar-mobile").animate(
    { opacity: 1 },
    {
      queue: false,
      duration: 1000,
    }
  );
  $(".container-navbar-mobile2").animate(
    { opacity: 1 },
    {
      queue: false,
      duration: 1000,
    }
  );
  $(".nplcMainLogo").animate(
    { opacity: 1 },
    {
      queue: false,
      duration: 1000,
    }
  );
  $(".navbarBtn").animate(
    { top: "40px" },
    {
      queue: false,
      duration: 1000,
    }
  );
  $(".navbarBtnTwo").animate(
    { top: "40px" },
    {
      queue: false,
      duration: 1000,
    }
  );
};

$(".naviHome")
  .mouseover(function () {
    $(".naviIntro").addClass("menuMouseOver");
    $(".naviRegister").addClass("menuMouseOver");
    $(".naviContact").addClass("menuMouseOver");
  })
  .mouseout(function () {
    $(".naviIntro").removeClass("menuMouseOver");
    $(".naviRegister").removeClass("menuMouseOver");
    $(".naviContact").removeClass("menuMouseOver");
  });
$(".naviIntro")
  .mouseover(function () {
    $(".naviHome").addClass("menuMouseOver");
    $(".naviRegister").addClass("menuMouseOver");
    $(".naviContact").addClass("menuMouseOver");
  })
  .mouseout(function () {
    $(".naviHome").removeClass("menuMouseOver");
    $(".naviRegister").removeClass("menuMouseOver");
    $(".naviContact").removeClass("menuMouseOver");
  });
$(".naviRegister")
  .mouseover(function () {
    $(".naviIntro").addClass("menuMouseOver");
    $(".naviHome").addClass("menuMouseOver");
    $(".naviContact").addClass("menuMouseOver");
  })
  .mouseout(function () {
    $(".naviIntro").removeClass("menuMouseOver");
    $(".naviHome").removeClass("menuMouseOver");
    $(".naviContact").removeClass("menuMouseOver");
  });
$(".naviContact")
  .mouseover(function () {
    $(".naviIntro").addClass("menuMouseOver");
    $(".naviRegister").addClass("menuMouseOver");
    $(".naviHome").addClass("menuMouseOver");
  })
  .mouseout(function () {
    $(".naviIntro").removeClass("menuMouseOver");
    $(".naviRegister").removeClass("menuMouseOver");
    $(".naviHome").removeClass("menuMouseOver");
  });

$(".navbarBtn").click(function () {
  toggleNavbar();
});
$(".navbarBtnTwo").click(function () {
  toggleNavbar();
});

$(".container-navbar-mobile").click(function () {
  toggleNavbarMobile();
});
$(".container-navbar-mobile2").click(function () {
  toggleNavbarMobile();
});

$(".naviTit").click(function () {
  toggleNavbarMobile();
});

$(".naviTitle").click(function () {
  toggleNavbar();
});

timelineNavbar = new TimelineMax({
  paused: true,
});

timelineNavbar
  .to(".navbarMenu", 0.2, {
    height: "500px",
    opacity: "0.3",
  })
  .to(".navbarMenu", 0.5, {
    height: "100%",
    opacity: "1",
  })
  .to(".naviLogoContainer", 0.5, {
    opacity: "1",
  });

var isOpenedNavbar = true;

function toggleNavbar() {
  $(".naviContainer").toggleClass("animate");
  if (isOpenedNavbar) {
    timelineNavbar.restart();
    $(".container-navbar").css("visibility", "visible");
    $(".navbarBtn").stop();
    $(".navbarBtnTwo").stop();
    $(".navbarBtn").animate(
      { opacity: 0 },
      {
        queue: false,
        duration: 500,
      }
    );
    $(".navbarBtnTwo").animate(
      { opacity: 1 },
      {
        queue: false,
        duration: 500,
      }
    );
    setTimeout(function () {
      $(".navbarBtn").css("visibility", "hidden");
      $(".navbarBtnTwo").css("visibility", "visible");
    }, 500);
  }
  if (!isOpenedNavbar) {
    timelineNavbar.reverse();
    $(".navbarBtn").stop();
    $(".navbarBtnTwo").stop();
    $(".navbarBtn").animate(
      { opacity: 1 },
      {
        queue: false,
        duration: 1000,
      }
    );
    $(".navbarBtnTwo").animate(
      { opacity: 0 },
      {
        queue: false,
        duration: 500,
      }
    );
    setTimeout(function () {
      $(".navbarBtn").css("visibility", "visible");
      $(".navbarBtnTwo").css("visibility", "hidden");
    }, 500);
    setTimeout(function () {
      $(".container-navbar").css("visibility", "hidden");
    }, 1000);
  }
  isOpenedNavbar = !isOpenedNavbar;
}

timelineNavbarMobile = new TimelineMax({
  paused: true,
});

timelineNavbarMobile
  .to(".navbar-mobile", 0.1, {
    width: "200px",
    opacity: "0.3",
  })
  .to(".navbar-mobile", 1, {
    width: "100%",
    opacity: "1",
  });

var isOpenedNavbarMobile = true;

function toggleNavbarMobile() {
  if (isOpenedNavbarMobile) {
    timelineNavbarMobile.restart();
    $(".navbar-mobile").css("visibility", "visible");
    $(".container-navbar-mobile").stop();
    $(".container-navbar-mobile2").stop();
    $(".container-navbar-mobile").animate(
      { opacity: 0 },
      {
        queue: false,
        duration: 500,
      }
    );
    $(".container-navbar-mobile2").animate(
      { opacity: 1 },
      {
        queue: false,
        duration: 500,
      }
    );
    setTimeout(function () {
      $(".container-navbar-mobile").css("visibility", "hidden");
      $(".container-navbar-mobile2").css("visibility", "visible");
    }, 500);
  }
  if (!isOpenedNavbarMobile) {
    timelineNavbarMobile.reverse();
    $(".container-navbar-mobile").stop();
    $(".container-navbar-mobile2").stop();
    $(".container-navbar-mobile").animate(
      { opacity: 1 },
      {
        queue: false,
        duration: 1000,
      }
    );
    $(".container-navbar-mobile2").animate(
      { opacity: 0 },
      {
        queue: false,
        duration: 500,
      }
    );
    setTimeout(function () {
      $(".container-navbar-mobile").css("visibility", "visible");
      $(".container-navbar-mobile2").css("visibility", "hidden");
    }, 500);
    setTimeout(function () {
      $(".navbar-mobile").css("visibility", "hidden");
      $(".naviMenu a").css("visibility", "hidden");
    }, 1500);
  }

  isOpenedNavbarMobile = !isOpenedNavbarMobile;
}

var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("mouseover", animateButton, false);
}

jQuery(document).ready(function ($) {
  //cache some jQuery objects
  var modalTrigger = $(".bubbly-button"),
    transitionLayer = $(".cd-transition-layer"),
    transitionBackground = transitionLayer.children(),
    modalWindow = $(".cd-modal");

  var frameProportion = 1.78, //png frame aspect ratio
    frames = 25, //number of png frames
    resize = false;

  //set transitionBackground dimentions
  setLayerDimensions();
  $(window).on("resize", function () {
    if (!resize) {
      resize = true;
      !window.requestAnimationFrame
        ? setTimeout(setLayerDimensions, 300)
        : window.requestAnimationFrame(setLayerDimensions);
    }
  });

  //open modal window
  modalTrigger.on("click", function (event) {
    $(".navbarBtn").animate(
      { opacity: 0 },
      {
        queue: false,
        duration: 600,
      }
    );
    setTimeout(function () {
      $(".navbarBtn").css("visibility", "hidden");
    }, 600);

    event.preventDefault();
    transitionLayer.addClass("visible opening");
    var delay = $(".no-cssanimations").length > 0 ? 0 : 600;
    setTimeout(function () {
      modalWindow.addClass("visible");
    }, delay);
  });

  //close modal window
  modalWindow.on("click", ".modal-close", function (event) {
    $(".navbarBtn").css("visibility", "visible");
    $(".navbarBtn").animate(
      { opacity: 1 },
      {
        queue: false,
        duration: 600,
      }
    );
    event.preventDefault();
    transitionLayer.addClass("closing");
    modalWindow.removeClass("visible");
    transitionBackground.one(
      "webkitAnimationEnd oanimationend msAnimationEnd animationend",
      function () {
        transitionLayer.removeClass("closing opening visible");
        transitionBackground.off(
          "webkitAnimationEnd oanimationend msAnimationEnd animationend"
        );
      }
    );
    setTimeout(function () {
      $(".formContainer").css("visibility", "inherit");
      $(".ruleContainer").css("visibility", "inherit");
      $(".nextBtn").css("visibility", "inherit");
      $(".backBtn").css("visibility", "inherit");
      $(".submitBtn").css("visibility", "inherit");
    }, 600);
  });

  function setLayerDimensions() {
    var windowWidth = $(window).width(),
      windowHeight = $(window).height(),
      layerHeight,
      layerWidth;

    if (windowWidth / windowHeight > frameProportion) {
      layerWidth = windowWidth;
      layerHeight = layerWidth / frameProportion;
    } else {
      layerHeight = windowHeight * 1.2;
      layerWidth = layerHeight * frameProportion;
    }

    transitionBackground.css({
      width: layerWidth * frames + "px",
      height: layerHeight + "px",
    });
    resize = false;
  }
});

$(".nextBtn").click(function () {
  $(".ruleContainer").stop();
  $(".nextBtn").stop();
  $(".formContainer").stop();
  $(".backBtn").stop();
  $(".submitBtn").stop();
  $(".backBtn").css("visibility", "visible");
  $(".submitBtn").css("visibility", "visible");
  $(".formContainer").css("visibility", "visible");
  $(".ruleContainer").animate(
    { opacity: 0 },
    {
      queue: false,
      duration: 600,
    }
  );
  $(".formContainer").animate(
    { opacity: 1 },
    {
      queue: false,
      duration: 600,
    }
  );
  $(".backBtn").animate(
    { opacity: 1 },
    {
      queue: false,
      duration: 600,
    }
  );
  $(".submitBtn").animate(
    { opacity: 1 },
    {
      queue: false,
      duration: 600,
    }
  );
  $(".nextBtn").animate(
    { opacity: 0 },
    {
      queue: false,
      duration: 600,
    }
  );
  setTimeout(function () {
    $(".ruleContainer").css("visibility", "hidden");
    $(".nextBtn").css("visibility", "hidden");
  }, 600);
});
$(".backBtn").click(function () {
  $(".ruleContainer").stop();
  $(".nextBtn").stop();
  $(".formContainer").stop();
  $(".backBtn").stop();
  $(".submitBtn").stop();
  $(".ruleContainer").css("visibility", "visible");
  $(".nextBtn").css("visibility", "visible");
  $(".ruleContainer").animate(
    { opacity: 1 },
    {
      queue: false,
      duration: 600,
    }
  );
  $(".nextBtn").animate(
    { opacity: 1 },
    {
      queue: false,
      duration: 600,
    }
  );
  $(".formContainer").animate(
    { opacity: 0 },
    {
      queue: false,
      duration: 600,
    }
  );
  $(".backBtn").animate(
    { opacity: 0 },
    {
      queue: false,
      duration: 600,
    }
  );
  $(".submitBtn").animate(
    { opacity: 0 },
    {
      queue: false,
      duration: 600,
    }
  );
  setTimeout(function () {
    $(".formContainer").css("visibility", "hidden");
    $(".backBtn").css("visibility", "hidden");
    $(".submitBtn").css("visibility", "hidden");
  }, 600);
});

$('select[name="category"]').change(function () {
  if ($(this).val() == "katsatu")
    $(".memberdua, .membertiga").prop('required',false);
  if ($(this).val() == "katdua")
    $(".memberdua, .membertiga").prop('required',true);
});
