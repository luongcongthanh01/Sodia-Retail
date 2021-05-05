function init() {
    for (var e = document.getElementsByTagName("img"), t = 0; t < e.length; t++) e[t].getAttribute("data-src") && e[t].setAttribute("src", e[t].getAttribute("data-src"))
} window.onload = init, $(document).ready(function() {
    $(".click-select-host").click(function(e) {
        e.preventDefault(), $(".table-content-host").slideToggle(300)
    }), $(".clickselect-host-item").click(function(e) {
        e.preventDefault(), $(".table-content-post").slideUp(300), $("#current_host, .form_host").val($(this).data("id")), call_ajaxbook()
    }), $(".click-select-domain").click(function(e) {
        e.preventDefault(), $(".table-content-domain").slideToggle(300)
    }), $(".clickselect-domain-item").click(function(e) {
        e.preventDefault(), $(".table-content-domain").slideUp(300), $("#current_domain, .form_domain").val($(this).data("id")), call_ajaxbook()
    }), $("#inputTime, #inputTimedomain").change(function(e) {
        $(".form_domain_time").val($("#inputTimedomain").val()), $(".form_host_time").val($("#inputTime").val()), e.preventDefault(), call_ajaxbook()
    }), $(".button-checkout").click(function(e) {
        var t = $(".total-price-table ul").html();
        $(".meta-book-form").html("<ul>" + t + "</ul>"), $(".book-form-price").html($(".price-total").html())
    }), $("#check_host").change(function(e) {
        $(this).prop("checked") ? ($("#current_host").val(2), $(".form_host").val(2), $(".price_total_host").show(), $(".content-name-host").show(300)) : ($("#current_host").val(0), $(".form_host").val(0), $(".price_total_host").hide(), $(".content-name-host").hide(300)), call_ajaxbook()
    }), $("#check_domain").change(function(e) {
        $(this).prop("checked") ? ($("#current_domain").val(1), $(".form_domain").val(1), $(".price_total_domain").show(), $(".content-name-domain").show(300)) : ($("#current_domain").val(0), $(".form_domain").val(0), $(".price_total_domain").hide(), $(".content-name-domain").hide(300)), call_ajaxbook()
    }), $("#inputTimehost").change(function(e) {
        var t = $("#inputTimehost option:selected").data("price");
        $(".price_host_re").html(t), $(".form_time_host").val($(this).val())
    }), $("#top-slider").owlCarousel({
        loop: !0,
        nav: !0,
        animateOut: "fadeOutDown",
        animateIn: "fadeInUp",
        dots: !1,
        autoplay: !0,
        autoplayTimeout: 4e3,
        autoplayHoverPause: !0,
        smartSpeed: 1e3,
        margin: 0,
        items: 1
    }), $("#logos").owlCarousel({
        loop: !0,
        nav: !1,
        animateOut: "fadeOutLeft",
        animateIn: "bounceInRight",
        dots: !1,
        autoplay: !0,
        autoplayTimeout: 4e3,
        autoplayHoverPause: !1,
        smartSpeed: 1e3,
        margin: 50,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 3
            },
            575: {
                items: 4
            },
            767: {
                items: 5
            },
            991: {
                items: 7
            }
        }
    }), $("#clients_slider").owlCarousel({
        autoplay: !0,
        autoplayTimeout: 5e3,
        items: 3,
        loop: !0,
        margin: 20,
        nav: !0,
        smartSpeed: 1e3,
        pagination: !1,
        dots: !1,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            1199: {
                items: 3
            }
        }
    }), $("#team_slider").owlCarousel({
        autoplay: !0,
        autoplayTimeout: 5e3,
        loop: !0,
        margin: 18,
        nav: !1,
        pagination: !1,
        dots: !0,
        smartSpeed: 1e3,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 2
            },
            767: {
                items: 3
            },
            1199: {
                items: 4
            }
        }
    }), $(function() {
        var e = "";
        $(".fil-cat").on("click", function() {
            $(".fil-cat").removeClass("active"), $(this).addClass("active"), "all" != (e = $(this).attr("data-rel")) ? $(".hidden-load-more").hide() : $(".hidden-load-more").show(), $("#portfolio_items").fadeTo(100, .1), $("#portfolio_items .portfolio_item").not("." + e).fadeOut().removeClass("scale-anm"), setTimeout(function() {
                $("." + e).fadeIn().addClass("scale-anm"), $("#portfolio_items").fadeTo(300, 1)
            }, 300)
        })
    })
}), $(window).on("scroll , load", function() {
    var a = $(window).scrollTop();
    50 < a ? $(".site_header").removeClass("position-absolute").addClass("header-scroll_bg_light fixed-top") : $(".site_header.fixed-top").removeClass("header-scroll_bg_light fixed-top").addClass("position-absolute"), $("section").each(function() {
        var e = $(this),
            t = $(e).attr("id");
        $(this).position().top - 100 <= a && 0 < $(".menu-item a[href*=" + t + "]").length && ($(".menu-item.active").removeClass("active"), $(".menu-item a[href*=" + t + "]").parent().addClass("active"))
    }), 600 < a ? $(".goto_top").fadeIn() : $(".goto_top").fadeOut()
}), $(".goto_top").on("click", function(e) {
    e.preventDefault(), $("body , html").animate({
        scrollTop: 0
    }, 1e3)
}), $(".top-btn").on("click", function(e) {
    if ("no-run" == $(this).attr("link")) {
        e.preventDefault();
        var t = $(this).attr("href");
        "#" != t && ($("body , html").animate({
            scrollTop: $(t).position().top
        }, 1e3), $(".navbar-collapse").removeClass("show"), $(".navbar-toggler svg").toggleClass("fa-times").toggleClass("fa-bars"))
    }
}), $(".navbar-toggler").on("click", function() {
    $(".navbar-toggler svg").toggleClass("fa-times").toggleClass("fa-bars")
}), $(".watch_video").on("click", function(e) {
    e.preventDefault();
    $(".video_src").html('<iframe src="https://www.youtube.com/embed/CZqVYI9r5LQ?controls=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'), $(".video_popup").css("display", "flex"), setTimeout(function() {
        $(".video_popup").css({
            transform: "scale(1,1)",
            opacity: "1"
        })
    }, 50)
}), $(".video_popup").on("click", function(e) {
    var t = e.target.nodeName,
        a = $(this).find("iframe").attr("src");
    "IFRAME" != t && ($(".video_popup").addClass("fadeOutRight").delay(1e3).fadeOut(), setTimeout(function() {
        $(".video_popup").removeClass("fadeOutRight")
    }, 1500), $(".video_popup iframe").attr("src", " "), $(".video_popup iframe").attr("src", a))
}), $(".portfolio .zoom").on("click", function(e) {
    e.preventDefault();
    var t = $(this).parents(".portfolio").find("img").attr("src");
    $(".photo_zoom").find("img").attr("src", t), $(".photo_zoom").css("display", "flex")
}), $(".photo_zoom").on("click", function(e) {
    "IMG" != e.target.nodeName && ($(".photo_zoom").addClass("fadeOutDown").delay(1e3).fadeOut(), setTimeout(function() {
        $(".photo_zoom").removeClass("fadeOutDown")
    }, 1500))
});

var Web_template = '<div class="col-sm-6 col-md-4 col-lg-3 portfolio_item scale-anm <%= slug %> all"><div class="portfolio"><span class="price-web"><%= price %></span><div class="_img"><img class="w-100" src="<%= img %>" alt="<%= title %>"></div><div class="project_desc"><a href="<%= link_test %>" class="xemthu">Dùng thử</a><a href="<%= link %>" class="xemchitiet">Chi tiết</a></div><a href="<%= link %>" class="link-mau"><%= title %></a></div></div>',
    Demo_template = '<div class="col-sm-6 col-md-4 col-lg-3 portfolio_item scale-anm"><div class="portfolio"><div class="_img"><img class="w-100" style="background:#ededed; height: 100%; padding: 50px; object-fit: cover;" src="' + ajax_object.urltheme + '/img/load.gif"></div></div></div>';

function call_ajaxbook() {
    var e = {
        host: $("#current_host").val(),
        domain: $("#current_domain").val(),
        web: $("#current_web").val(),
        timehost: $("#inputTime").val(),
        timedomain: $("#inputTimedomain").val()
    };
    $.ajax({
        type: "POST",
        dataType: "json",
        url: ajax_object.ajaxurl,
        data: {
            action: "Book_web_action",
            data: e,
            security: ajax_object.ajax_nonce
        },
        beforeSend: function() {
            $(".load-page-book").css("display", "flex")
        },
        success: function(e) {
            $(".load-page-book").hide();
            var t = e.host,
                a = (e.domain, e.pricehost),
                o = e.pricedomain,
                i = e.total;
            $(".current_disk").html(t.disk), $(".current_bandwidth").html(t.bandwidth), $(".current_domain").html(t.domain), $(".price_domain_re").html(o), $(".price_host_re").html(a), $(".total_price_43").html(i), $(".form_total").val(i)
        }
    })
}
$(".loadwebBtn").click(function(e) {
    e.preventDefault();
    var o = $(".portfolio_item").length,
        i = $(".return-ajax"),
        s = $(".showbeforeload"),
        n = $(".sum_web").val();
    $.ajax({
        type: "POST",
        dataType: "json",
        url: ajax_object.ajaxurl,
        data: {
            action: "Web_action",
            offset: o,
            security: ajax_object.ajax_nonce
        },
        beforeSend: function() {
            for (var e = 0; e < 4; e++) s.append(Demo_template)
        },
        success: function(e) {
            o + e.length >= n && $(".hidden-load-more").hide(), s.empty();
            for (var t = 0; t < e.length; t++) {
                var a = e[t];
                i.append(_.template(Web_template)({
                    id: a.id,
                    title: a.title,
                    link: a.link,
                    img: a.img,
                    link_test: a.link_test,
                    slug: a.slug,
                    price: a.price
                }))
            }
        }
    })
}), $("#form_book_web").submit(function(e) {
    e.preventDefault();
    var t = {};
    $.each($(this).serializeArray(), function() {
        t[this.name] = this.value
    }), $.ajax({
        type: "POST",
        dataType: "json",
        url: ajax_object.ajaxurl,
        data: {
            action: "Bookmail_action",
            data: t,
            security: ajax_object.ajax_nonce
        },
        beforeSend: function() {
            $(".form-load").css("display", "flex"), $(".messes").html("")
        },
        success: function(e) {
            $(".form-load").css("display", "none"), $(".messes").html('<p class="' + e.status + '">' + e.mess + "</p>"), "sussec" == e.status && setTimeout(function() {
                window.location.replace("/mau-web")
            }, 3e3)
        }
    })
}), $("#contact_form").submit(function(e) {
    e.preventDefault();
    var t = {};
    $.each($(this).serializeArray(), function() {
        t[this.name] = this.value
    }), $.ajax({
        type: "POST",
        dataType: "json",
        url: ajax_object.ajaxurl,
        data: {
            action: "Contactmail_action",
            data: t,
            security: ajax_object.ajax_nonce
        },
        beforeSend: function() {
            $(".form-load").css("display", "flex"), $(".messes").html("")
        },
        success: function(e) {
            $(".form-load").css("display", "none"), "sussec" == e.status && (document.getElementById("contact_form").reset(), grecaptcha.reset()), $(".messes").html('<p class="' + e.status + '">' + e.mess + "</p>")
        }
    })
}), $("#buy-hosting").submit(function(e) {
    e.preventDefault();
    var t = {};
    $.each($(this).serializeArray(), function() {
        t[this.name] = this.value
    }), $.ajax({
        type: "POST",
        dataType: "json",
        url: ajax_object.ajaxurl,
        data: {
            action: "Buyhostmail_action",
            data: t,
            security: ajax_object.ajax_nonce
        },
        beforeSend: function() {
            $(".form-load").css("display", "flex"), $(".messes").html("")
        },
        success: function(e) {
            $(".form-load").css("display", "none"), "sussec" == e.status && (document.getElementById("buy-hosting").reset(), grecaptcha.reset()), $(".messes").html('<p class="' + e.status + '">' + e.mess + "</p>")
        }
    })
});

$(function () {
	$('.navbar-toggler').on('click', function () {
		$(this).toggleClass('collapsed');
		$('.navbar-collapse').toggleClass('collapse');
	})
})