var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array
        ("肖战是我的", "龚俊是我的", "张哲瀚是我的", "朱一龙是我的", "鹿晗是我的", "千玺是我的", "王一博是我的", "白宇是我的", "杨洋是我的", "李现是我的", "他们都是我的", "他们很爱我", "很爱很爱很爱我", "我也很爱他们", "o(*////▽////*)q");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#FF0000"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
            3000,
            function() {
                $i.remove();
            });
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}