$(function () {
    //获取要定位元素距离浏览器顶部的距离
    var navH = $(".new-product-tab").offset().top + 10;
    // console.log(navH);
    //滚动条事件
    $(window).scroll(function () {
        // console.log($(window).width())
        //获取滚动条的滑动距离
        var scroH = $(this).scrollTop() + 70;
        // console.log(scroH);
        //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
        if ($(window).width() < 767) {
            if (scroH >= navH) {
                $(".new-product-tab").css({"position": "fixed", "top": 69, "z-index": 2});
            } else if (scroH < navH) {
                $(".new-product-tab").css({"position": "static"});
            }
        } else {
            if (scroH >= navH) {
                // $(".new-product-tab").css({
                //     "position": "fixed",
                //     "top": 69,
                //     "z-index": 2,
                //     "background-color": "#ECECEE"
                // });
                $(".new-product-tab").addClass("new-fixed")
                $(".product-bottom-tabBox").css({"padding-top": 68})
            } else if (scroH < navH) {
                $(".new-product-tab").removeClass("new-fixed")
                $(".new-product-tab").css({"position": "static"});
                $(".product-bottom-tabBox").css({"padding-top": 0})
            }
        }

    })
});