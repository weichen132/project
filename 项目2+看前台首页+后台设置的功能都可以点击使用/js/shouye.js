/**
 * Created by Administrator on 2017/7/8.
 */

$(function () {
    /*第一个页面滑入*/
    $("#nr1_1").animate(
        {top:"0px"},1500
    )

    /*点击导航首页，移动到*/
    $("#sy").click(function () {
        $("#sy>a").attr("href","#nr1")

})

    /*滚动事件 滑动的时候 出现3个图标*/
    $(window).scroll(function(){
        if($(window).scrollTop()>=450&&$(window).scrollTop()<800){
            $("#con2").animate({top:"0px"},"normal")
        }
        /*中间2个图标向中间靠拢*/
        if($(window).scrollTop()>=900&&$(window).scrollTop()<1000){
            $("#con3_1").animate({left:"0px"},1500);
            $("#con3_2").animate({left:"0px"},1500);
            $("#con4").animate({top:"0px"},1500);
        }
        /*最新课程*/
        if($(window).scrollTop()>1500&&$(window).scrollTop()<1600){
            $("#con5").fadeIn(3000)
        }
        /*移动学院App*/
        if($(window).scrollTop()>2100&&$(window).scrollTop()<2200){
            $("#con6").animate({top:"0px"},1500)
        }
        /*最后一栏，往中间靠拢*/
        /*中间2个图标向中间靠拢*/
        if($(window).scrollTop()>=2500&&$(window).scrollTop()<2700){
            $("#con7_1").animate({left:"0px"},1500);
            $("#con7_2").animate({left:"0px"},1500);
        }
    })
    /*经过3个图标的时候效果*/
   /* var num=0;
    $("#img1").mouseover(function(){
        num++;
        $("#img1").rotate(90*num)
    })*/
    $('#img1').rotate({
        bind : {
            mouseover : function(){
                $('#img1_1').rotate({animateTo: 360});
            }, mouseout : function(){
                $('#img1_1').rotate({animateTo: 0});
            }
        }
    });
    /*2 用scal效果代替*/
   /* $("#img2").mouseover(function () {
        alert(0)
    })
  $("#img2 img").scale(1,5)
  })*/
    /*3.频闪效果*/
    /*   $("#img3").mouseover(function () {
     $("#divImg").addClass("op")
    $("#img3").mouseout(function () {
        $("#divImg").removeClass("op")
    })
*/
    var ii
    function autoplay(){
        ii=setInterval(function(){ $("#img3_1").fadeIn("slow").fadeOut("slow"); },1000);
    }
    var jn={
        mouseenter: function () {
            autoplay()
        },
        mouseleave: function () {
            clearInterval(ii)
            $("#img3_1").fadeIn("slow")
        }
    }
    $("#img3").bind(jn)




    /*mouseover():无论鼠标穿过本元素,还是子元素  都会触发mouseover事件*/
    /*换成mouseenter mouseleave就正常了*/
    /*移动到课程图片的时候，往上移动*/
    $("#con5 .col-lg-3").mouseover(function(){
        $(this).animate({top:"-35px"},"fast")
    })
    $("#con5 .col-lg-3").mouseout(function(){
        $(this).animate({top:"0px"},"fast")
    })

})


/*锚点缓慢移动*/

$("#ul1 a").each(function () {
    $(this).click(function() {
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top + "px"},
            { duration: 500,easing: "swing"});
        $(this).attr("href","")
        return false;
    });
})

