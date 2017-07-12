(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/658+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //报名按钮
    $('.button').on('click',function () {
        window.location.href = '';
    });
    //隐藏手机号中间4位
    (function () {
        var $number = $('.clear').find('li');
        var mtel = $number.html().substr(0, 3) + 'xxxx' + $number.html().substr(-4);
        $number.text(mtel);
    })();
});
