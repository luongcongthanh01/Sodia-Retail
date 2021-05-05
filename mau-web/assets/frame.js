function wooGetUrlVars() {
    var e = [],
        t, n = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&");
    for (var r = 0; r < n.length; r++) {
        t = n[r].split("=");
        e.push(t[0]);
        e[t[0]] = t[1]
    }
    return e
}(function (e) {
    jQuery(document).ready(function () {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            jQuery(".respond").hide();
            jQuery(".theme-wrapper").height(window);
            jQuery(".theme-wrapper").width(window)
        }
        var e = jQuery(window).height() - 54,
            t = jQuery(window).height(),
            n = 568,
            r = 320,
            i = 1024,
            s = 768;
        jQuery(".switcher .respond a, a.remove, a.reveal, a.active-theme").click(function (e) {
            e.preventDefault()
        });
        jQuery(".switcher-toggle").click(function (e) {
            e.preventDefault();
            jQuery("html").toggleClass("switcher-visible");
            jQuery("html").toggleClass("switcher-hidden")
        });
        jQuery(".phone.inactive").click(function () {
            jQuery(this).removeClass("inactive");
            jQuery(".respond a:not(.phone)").addClass("inactive");
            jQuery(this).addClass("activePortrait");
            jQuery(".theme-wrapper").css("height", n);
            jQuery(".theme-wrapper").css("width", r);
            jQuery(".theme-wrapper").addClass("iOSdevice").removeClass("landscape").addClass("portrait").removeClass("notiOS");
            jQuery(".phone").click(function () {
                if (jQuery(this).hasClass("activePortrait")) {
                    jQuery(this).removeClass("activePortrait");
                    jQuery(this).addClass("activeLandscape");
                    jQuery(".theme-wrapper").css("height", r);
                    jQuery(".theme-wrapper").css("width", n);
                    jQuery(".theme-wrapper").removeClass("portrait");
                    jQuery(".theme-wrapper").addClass("landscape")
                } else {
                    jQuery(this).removeClass("activeLandscape");
                    jQuery(this).addClass("activePortrait");
                    jQuery(".theme-wrapper").css("height", n);
                    jQuery(".theme-wrapper").css("width", r);
                    jQuery(".theme-wrapper").removeClass("landscape");
                    jQuery(".theme-wrapper").addClass("portrait")
                }
            })
        });
        jQuery(".tablet.inactive").click(function () {
            jQuery(this).removeClass("inactive");
            jQuery(".respond a:not(.tablet)").addClass("inactive");
            jQuery(this).addClass("activePortrait");
            jQuery(".theme-wrapper").css("height", i);
            jQuery(".theme-wrapper").css("width", s);
            jQuery(".theme-wrapper").addClass("iOSdevice").removeClass("landscape").addClass("portrait").removeClass("notiOS");
            jQuery(".tablet").click(function () {
                if (jQuery(this).hasClass("activePortrait")) {
                    jQuery(this).removeClass("activePortrait");
                    jQuery(this).addClass("activeLandscape");
                    jQuery(".theme-wrapper").css("height", s);
                    jQuery(".theme-wrapper").css("width", i);
                    jQuery(".theme-wrapper").removeClass("portrait");
                    jQuery(".theme-wrapper").addClass("landscape")
                } else {
                    jQuery(this).removeClass("activeLandscape");
                    jQuery(this).addClass("activePortrait");
                    jQuery(".theme-wrapper").css("height", i);
                    jQuery(".theme-wrapper").css("width", s);
                    jQuery(".theme-wrapper").removeClass("landscape");
                    jQuery(".theme-wrapper").addClass("portrait")
                }
            })
        });
        jQuery(".respond a.desktop").click(function () {
            jQuery(".theme-wrapper").removeAttr("style");
            jQuery(".theme-wrapper").removeClass("iOSdevice").removeClass("landscape").removeClass("portrait").addClass("notiOS")
        });
        jQuery(".respond a").click(function () {
            jQuery(".respond a").removeClass("active").addClass("inactive");
            jQuery(this).addClass("active").removeClass("inactive");
            jQuery("#theme-demo").attr("src", function (e, t) {
                return t
            })
        });
        jQuery(".theme-drop .theme a").click(function (e) {
            e.preventDefault();
            var t = jQuery(this).attr("href"),
                n = window.location.href;
            if (t.substring(0, 15) != n.substring(0, 15)) {
                var r = t.split(".com/"),
                    i = r[0] + ".com/?name=" + r[1].replace("/", ""),
                    s = wooGetUrlVars();
                "themeforest" == s["ref"] && (i += "&ref=themeforest");
                window.location = i;
                return !1
            }
            jQuery("#theme-demo").attr("src", t).css("visibility", "visible");
            jQuery(".theme-drop .active-theme .title").text(jQuery(this).text());
            jQuery("a.purchase").attr("href", jQuery(this).data("purchase-url"));
            jQuery.get("/?get_styles", {
                name: jQuery(this).data("theme")
            }, function (e) {
                if (e.length) {
                    jQuery(".styles-drop").show();
                    jQuery(".styles-drop ul").html(e)
                } else jQuery(".styles-drop").hide()
            });
            jQuery.get("/?get_examples", {
                name: jQuery(this).data("theme")
            }, function (e) {
                if (e.length) {
                    jQuery(".examples-drop").show();
                    jQuery(".examples-drop ul").html(e)
                } else jQuery(".examples-drop").hide()
            });
            jQuery("#theme-demo").load(function () {
                jQuery(this).css("visibility", "visible")
            })
        });
        jQuery(".examples-drop li a").on("click", function (e) {
            e.preventDefault();
            var t = jQuery(this).attr("href");
            jQuery("#theme-demo").attr("src", t).css("visibility", "visible");
            jQuery(".styles-drop").hide();
            jQuery("#theme-demo").load(function () {
                jQuery(this).css("visibility", "visible")
            });
            return !1
        });
        jQuery(".styles-drop li a").on("click", function (e) {
            e.preventDefault();
            var t = jQuery(this).attr("href");
            jQuery("#theme-demo").contents().find('link[href*="/styles/"]').attr("href", t);
            return !1
        });
        jQuery("a.woologo[href]").each(function () {
            var e = jQuery(this).attr("href");
            jQuery(this).removeAttr("href").data("href", e).click(function () {
                self.location.href = jQuery(this).data("href")
            })
        })
    })
})(jQuery);
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js#xfbml=1&version=v3.2&appId=297964984242769&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));