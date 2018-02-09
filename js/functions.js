$(function() {
    var blockTop = $('.topich').offset().top;
    var CountUpFlag = 0;
    var $window = $(window);
    $window.on('load scroll', function() {
        var top = $window.scrollTop();
        var height = $window.height();
        if (top + height >= blockTop && CountUpFlag == 0) {
            $('#navigation').css("background-color", "#fff");
        } else {
        	$('#navigation').css("background-color", "transparent");
        }
    });
    function CountUp() {
        $('#navigation').css("background-color", "#fff");
    }
});