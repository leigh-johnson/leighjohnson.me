

$(document).ready(function() {
    
    //change menu toggle
    $(".navbar-toggle").click(function() {
        $('.navbar-toggle').toggleClass('icon-close');
         $('.navbar-toggle').toggleClass('icon-list');
    });

    $(".navbar").sticky({
        topSpacing: 0
    }), $("#main-menu").onePageNav({
        currentClass: "active",
        changeHash: !1,
        scrollThreshold: .5,
        scrollSpeed: 750,
        scrollOffset: 40,
        filter: "",
        easing: "swing"
    }), $(".home-brand").click(function() {
        return $("html, body").animate({
            scrollTop: 0
        }, "slow"), !1
    }), $(".btn-about").click(function() {
        return $("html, body").animate({
            scrollTop: $("#about-section").offset().top
        }, 750), !1
    }), $(".btn-portfolio").click(function() {
        return $("html, body").animate({
            scrollTop: $("#portfolio-section").offset().top
        }, 750), !1
    }), $(".meta .comments a").click(function() {
        return $("html, body").animate({
            scrollTop: $("#comments").offset().top
        }, 750), !1
    }), $(".btn-reply").click(function() {
        return $("html, body").animate({
            scrollTop: $("#reply-form").offset().top
        }, 750), $("input").first().focus(), !1
    }), $(".grid-controls li a").click(function() {
        $("ul.grid-controls li.active").removeClass("active"), $(this).parent("li").addClass("active")
    }), $(window).load(function() {
        var e = $(".grid-wrapper");
        e.isotope({
            filter: "*",
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), $(".grid-controls li a").click(function() {
            $(".grid-controls .current").removeClass("current"), $(this).addClass("current");
            var a = $(this).attr("data-filter");
            return e.isotope({
                filter: a,
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: !1
                }
            }), !1
        })
    }), $(window).resize(function() {
        var e = $(".grid-wrapper");
        e.isotope({
            filter: "*",
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        })
    }), $(".popup-image").magnificPopup({
        image: {
            titleSrc: "caption",
        },
        type: "image"
    }), $(".popup-vimeo").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    }), 

    /*Filter & Sort blog posts - to-be implemented
        $(".blog-controls li a").click(function() {
        $("ul.blog-controls li.active").removeClass("active"), $(this).parent("li").addClass("active")
    }), $(window).load(function() {
        var e = $(".blog-wrapper");
        e.isotope({
            filter: "*",
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), $(".blog-controls li a").click(function() {
            $(".blog-controls .current").removeClass("current"), $(this).addClass("current");
            var a = $(this).attr("data-filter");
            return e.isotope({
                filter: a,
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: !1
                }
            }), !1
        })
    }), $(window).resize(function() {
        var e = $(".blog-wrapper");
        e.isotope({
            filter: "*",
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        })
    }),
    */
     $(function() {
        $(".navbar-default").data("size", "big")
    }), $(window).scroll(function() {
        $(document).scrollTop() > 0 ? "big" == $(".navbar-default").data("size") && ($(".navbar-default").data("size", "small"), $(".navbar-default").animate({
            padding: "0px"
        }, 300)) : "small" == $(".navbar-default").data("size") && ($(".navbar-default").data("size", "big"), $(".navbar-default").animate({
            padding: "15px 0px"
        }, 300))
    }), $("#about-section").waypoint(function() {
        $("#about-feature").addClass("animated flipInX")
    }, {
        offset: "50%",
        triggerOnce: !0
    }), 
        $("#services-section").waypoint(function() {
        $(".achievement-list").addClass("fadeInUp animated");
    }, {
        offset: "50%",
        triggerOnce: !0
    }), $("#portfolio-section").waypoint(function() {
        $(".grid-wrapper").addClass("bounceIn animated")
    }, {
        offset: "50%",
        triggerOnce: !0
    }), $("#blog-teaser-section").waypoint(function() {
        $("#blog-teaser").addClass("bounceIn animated")
    }, {
        offset: "50%",
        triggerOnce: !0
    }), $("#contact-form").validate({
        rules: {
            name: {
                minlength: 2,
                required: !0
            },
            email: {
                required: !0,
                email: !0
            },
            message: {
                minlength: 2,
                required: !0
            }
        },
        highlight: function(e) {
            $(e).closest(".control-group").removeClass("success").addClass("error")
        },
        success: function(e) {
            e.text("OK!").addClass("valid").closest(".control-group").removeClass("error").addClass("success")
        }
    }), $("#reply-form").validate({
        rules: {
            name: {
                minlength: 2,
                required: !0
            },
            email: {
                required: !0,
                email: !0
            },
            message: {
                minlength: 2,
                required: !0
            }
        },
        highlight: function(e) {
            $(e).closest(".control-group").removeClass("success").addClass("error")
        },
        success: function(e) {
            e.text("OK!").addClass("valid").closest(".control-group").removeClass("error").addClass("success")
        }
    })
});