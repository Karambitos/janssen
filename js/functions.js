$(document).ready(function() {

    parallaxPerson();
    scrollBg();
    validationFormLogin();

    // Sticky header

    $(window).scroll(function() {
        if ($(window).scrollTop() > 150) {
            $(".header").addClass("fixed");
        } else {
            $(".header").removeClass("fixed");
        }
    });

    // Header menu

    $(".header-btn").click(function() {
        $(this).parent(".header-nav").toggleClass("open-nav");
        $("body").toggleClass("open-nav");
    });

    $(document).on("click", function(event){
        var $trigger = $(".header-nav");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".header-nav").removeClass("open-nav");
        }
    });

    // Label placeholder

    $(".box-label label").inFieldLabels({
        fadeOpacity: 0
    });

    // Video upload select

    $(".block-video-upload select").customSelect({
        placeholder: "Kategorie*"
    });

    // Video upload parallax


    function parallaxPerson() {
        var parallaxObj = '.js-person-parallax';
        var topGap = 0;
        var speedCoeff = 4;

        var innerWidth = $(window)[0].innerWidth;

        if(innerWidth < 500) {
            topGap = 100;
            speedCoeff = 1;

        } else if(innerWidth <= 1023) {
            topGap = 50;
            speedCoeff = 2;

        } else if(innerWidth > 1024) {
            topGap = 108;
            speedCoeff = 3;
        }


        $(window).scroll(function () {
            var parallaxDistance = ($(window).scrollTop()/-speedCoeff) + topGap;
            var parallaxCSS = null;

            if(innerWidth < 500) {
                if(parallaxDistance >= 13) {
                    parallaxCSS = "translate3d(0, "+ parallaxDistance +"px , 0)";
                }

            } else if(innerWidth <= 1023) {
                if(parallaxDistance >= -15) {
                    parallaxCSS = "translate3d(0, "+ parallaxDistance +"px , 0)";
                }

            } else if(innerWidth > 1024) {
                if(parallaxDistance >= 15) {
                    parallaxCSS = "translate3d(0, "+ parallaxDistance +"px , 0)";
                }
            }


            if($(window).scrollTop() == 0) {
                $(parallaxObj).css("transform", parallaxCSS);
            }


            $(parallaxObj).css("transform", parallaxCSS);
            parallaxCSS = "translate3d(0, "+ parallaxDistance + "px , 0)";
        });
    }

    // Limit text textarea

    var maxchars = 160;

    $("textarea").keyup(function () {
        var tLength = $(this).val().length;
        $(this).val($(this).val().substring(0, maxchars));
        var tLength = $(this).val().length;
        limitText = maxchars - parseInt(tLength);
        $("#limitText").text(limitText);
    });

    // Block popup

    if ($(".block-popup").is(":visible")) {
        $("body").addClass("block-popup-lock");
    } else {
        $("body").removeClass("block-popup-lock");
    }

    $(".block-popup-close").click(function() {
        $(this).closest(".block-popup").hide();
        $("body").removeClass("block-popup-lock");
    });

    // Start video parallax

    $(window).scroll(function () {
        var parallaxStartDistance = ($(window).scrollTop()/3),
            parallaxStartCSS = "translate3d(0, "+ parallaxStartDistance +"px , 0)";

        $(".block-video-start").css("transform", parallaxStartCSS);
    });

    // Anchor smooth scroll

    $(document).on("click", ".header-anchor a[href^='#']", function (event) {
        event.preventDefault();

        $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top
        }, 1000);
    });

    // Sticky block icons

    function checkOffset() {
        if($('.block-icons-space').offset().top + $('.block-icons-space').height()
            >= $('.footer').offset().top - 10)
            $('.block-icons-space').css('position', 'absolute');
        if($(document).scrollTop() + window.innerHeight < $('.footer').offset().top)
            $('.block-icons-space').css('position', 'fixed');
    }

    $(document).scroll(function() {
        checkOffset();

        var scroll = $(this).scrollTop() + $(window).height() - 100;
        var scrollWrap = $('.block-space').offset().top;
        if (scroll > scrollWrap) {
            $('.block-icons-space').addClass('sticky');
        } else {
            $('.block-icons-space').removeClass('sticky');
        }
    });

    // $('.box-icons-space .box-icon').on('click', function(){
    //     function random(max){
    //         return Math.random() * (max - 0) + 0;
    //     }
    //     var c = document.createDocumentFragment();
    //     for (var i=0; i<100; i++) {
    //         var styles = 'transform: translate3d(' + (random(500) - 250) + 'px, ' + (random(200) - 150) + 'px, 0) rotate(' + random(360) + 'deg);\
    //               background: hsla('+random(360)+',100%,50%,1);\
    //               animation: bang 700ms ease-out forwards;\
    //               opacity: 0';
    //
    //         var e = document.createElement("i");
    //         e.style.cssText = styles.toString();
    //         c.appendChild(e);
    //     }
    //     // document.body.appendChild(c);
    //     $(this).append(c);
    // });

    $(".js-btn").on("click", function (event) {
        let divBoxIn = event.currentTarget;
        let attribute = divBoxIn.getAttribute("data-image");
        let iteration = 70;

        let src = "./img/icon/flack-e.png";
        if (attribute === "heart" || attribute === "ja") {
            if (attribute === "heart") {
                iteration = 100;
                src = "./img/icon/heart.svg";
            } else {
                iteration = 100;
                src = "./img/icon/ja.svg";
            }
        }

        function random1(min, max) {
            return Math.random() * (max - min + 1) + min;
        }

        divBoxIn.childNodes[1].textContent =
          +divBoxIn.childNodes[1].textContent + 1;
        function random(max) {
            return Math.random() * (max - 0) + 0;
        }
        var c = document.createDocumentFragment();

        for (var i = 0; i < iteration; i++) {
            var styles =
              "transform: translate3d(" +
              random(4008) +
              "px, " +
              random1(-9000, 1000) +
              "px, " +
              random(6999) +
              "px) rotate(" +
              random(360) +
              "deg);\
                     \
                          animation: bang 2000ms ease forwards;\
                          opacity: 0;\
                          position: absolute";

            var e = document.createElement("img");
            e.setAttribute("src", src);
            //   console.log(e);
            e.style.cssText = styles.toString();

            c.appendChild(e);
        }

        // document.body.appendChild(c);
        $(this).append(c);
    });

    // Scroll background animation
    function scrollBg() {
        var $body = jQuery('body');
        var scrollTop = $(window).scrollTop();

        $(document).scroll(function(e) {
            scrollTop = $(window).scrollTop() / -2;

            $body.css('background-position-y', scrollTop);
        })
    }

    // List sounds
    $(".icon-speakers").click(function() {
        $(this).parent().toggleClass("open");
    });
    $(document).on("click", function(event){
        var $trigger = $(".box-clap-info");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".box-speakers").removeClass("open");
        }
    });

});

// Login form validation

function validationFormLogin() {
    var $form = jQuery('.form-login');
    var $fieldBox = $form.find('.box-label input');
    var $button = $form.find('button#login');
    var classInvalidFiled = 'error-field';
    var $errorMessage = $form.find('.error-message');


    var typeField = {
        email: 'username',
        password: 'passwort'
    }

    $button.on('click', function(e) {
        e.preventDefault();

        $fieldBox.each(function(i, field) {
            var typeFiled = jQuery(field).attr('id');
            var $field = jQuery(field);

            switch (typeFiled) {
                case typeField.email : {
                    valid.bind($field)(!validateEmail($field.val()));
                    break;
                }
                case typeField.password : {
                    valid.bind($field)($field.val() === "");
                    break;
                }
                default: {
                    break;
                }
            }
        })

        if(jQuery('.'+classInvalidFiled).length === 0) {
            $errorMessage.addClass('hidden')
            setTimeout(function() {
                document.location.reload();
            }, 1000)
        } else {
            $errorMessage.removeClass('hidden')
        }
    })


    function valid(expression) {
        if(expression) {
            jQuery(this).addClass(classInvalidFiled);
        } else {
            jQuery(this).removeClass(classInvalidFiled);
        }
    }


    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}

