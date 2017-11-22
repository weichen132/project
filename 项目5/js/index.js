/**
 * Created by admin on 2017/6/21.
 */
/*
1:红人烧客  hot鼠标提示效果*/
    var arr =[  //提示的文字来源 , 放到数组里 方便管理
        "",
        "用户1:<br>人气998",
        "用户2性感宝贝:<br>人气999",
        "用户3青春妹妹:<br>人气998",
        "用户4:<br>人气998",
        "用户5:<br>人气998",
        "用户6:<br>人气998",
        "用户7:<br>人气998",
        "用户8:<br>人气998",
        "用户9:<br>人气1998",
        "用户10:<br>人气1998",
      ];
//鼠标移到图片上
//index()可以得到当前下标
$(".hot_area ul li").mouseover(function () {
    if($(this).index()==0){//如果鼠标放到第一个li上的时候
        return;//直接不执行 , 第一个li不用做特效
    }
    $(".hot_area ul li p ").remove();//将原来的p标签移除
    var w = $(this).width();//获取到当前li的宽度
    var h = $(this).height();//获取当前宽度
    var i = $(this).index();//获取当前li的下标
    $(this).append("<p style='width:"+(w-12)+"px '>"+arr[i]+"</p>")
})

/****BBS高亮显示*****/
$(".bbs ol li").mouseover(function () {
    var j = $(this).index()
    $(".bbs ol li").removeClass("active").eq(j).addClass("active");

})

//********搜索框的切换****************
var aLi=$("#menu li")//获取到li
var oText = $("#search").find(".form .text");//获取到文本框
var arrText=[
    "例如:北京初雪 天气变幻莫测",
    "例如:上海初雪 天气变幻莫测",
    "例如:广州初雪 天气变幻莫测",
    "例如:长沙初雪 天气变幻莫测",
    "例如:东北初雪 天气变幻莫测"
]
var iNow = 0;//当前项默认为0
oText.val(arrText[iNow]);//输入框的值默认为数组第一个
aLi.each(function (index) {//将所有的li遍历
    $(this).click(function () {
        iNow=index;
        oText.val(arrText[iNow])
        aLi.attr("class","gradient").eq(iNow).attr("class","active");
        //$(this).attr("class","active");
    })
})
oText.focus(function () {//输入框获取焦点,文本空
    $(this).val("");
})
oText.blur(function () {//失去焦点
    $(this).val(arrText[iNow])
})



/*焦点轮播图*/
 var oDiv =$("#fade");//获得轮播图盒子
  var aUli = oDiv.find('ul li')//获得左边大图的li
var aOli = oDiv.find('ol li')//获取右边小图
var oP =oDiv.find("p")//获取文本标签
var arr1=["爸爸去哪??","爷爷去哪??","儿子去哪??"]
var iNow=0;//当前项为0
var timer=null;//空定时器
//show() hide()  fadeIn() fadeOut() slideDown() slideUp()
fnFade();
oDiv.hover(function () {clearInterval(timer)},autoplay)//鼠标悬停
aOli.click(function () {//点击选择
    iNow=$(this).index();
    fnFade();
})
function autoplay(){//自定义一个函数,控制其自动播放
    timer=setInterval(function () {
        iNow++;
        iNow=iNow%arr1.length;
        fnFade();
    },1000)
}
autoplay()
function fnFade(){//自定义函数,控制显示和隐藏
    aUli.each(function (ind) {//左侧大图遍历
        if(ind!=iNow){  //  0!=0  false
            aUli.eq(ind).fadeOut().css("zIndex",1);
            aOli.eq(ind).removeClass("active");

        }else{
            aUli.eq(ind).fadeIn().css("zIndex",2);
            aOli.eq(ind).addClass("active");
        }
    })
    oP.text(arr1[iNow]);
}


//**********选项卡*********************
//自定义一个方法  知道选项头  和  选项内容  以及切换方法  就可以做到选项功能
//oNav 代表选项的标题头
//aCon 代表底下选项的内容
//sEvent 代表用什么事件触发
fnTab($(".tabNav1"),$(".tabCon1"),"click");
fnTab($(".tabNav4"),$(".tabCon4"),"mouseover");
fnTab($(".tabNav2"),$(".tabCon2"),"click");
fnTab($(".tabNav3"),$(".tabCon3"),"mouseover");
function fnTab(oNav,aCon,sEvent){
    var aElem=oNav.children();//得到标题头的孩子
    aCon.hide().eq(0).show();//选项内容除了第一个之外 其他的都隐藏
    aElem.each(function (index1) {
        $(this).on(sEvent, function () {
            aElem.removeClass("active").addClass("gradient");
            $(this).removeClass("gradient").addClass("active");

            aElem.find("a").attr("class","triangle_down_gray");
            $(this).find("a").attr("class","triangle_down_red");

            aCon.hide().eq(index1).show();
        })
    })
}


/*日历提示说明*/
/*从图片获取信息 付给提示快*/
var aSpan= $(".calendar h3 span")//获取到星期提示
var aImage=$(".calendar .img")//获取到图片对象

var opri = $(".today_info")//获取到提示信息框对象
var oImg=opri.find("img")//获取到提示快里面的图片
var oStrong = opri.find("strong")//获取到提示快里的星期
var oP1=opri.find("p")//获取提示框里面的文本
aImage.mouseover(function () {
    var iTop=$(this).parent().position().top-30;
    var iLeft=$(this).parent().position().left+50;
    var ai=$(this).parent().index()%aSpan.length//获取0-6,,,当前星期的下标，%7
    console.log($(this).parent().index())
    opri.show().css({"left":iLeft,"top":iTop});
    oP1.text($(this).attr("info"))//将图片里的info属性放到提示信息的p标签里
    oImg.attr("src",$(this).attr("src"))
    oStrong.text(aSpan.eq(ai).text())
})
aImage.mouseleave(function () {
    opri.hide()
})

/*＊＊＊文字弹性滑动＊＊＊＊＊*/
var aDiv= $(".update");
var aUl=aDiv.find("ul")//获取ul
var iH=0;//默认高度为0
var arrdata=[//弹出的文字来源
    {"name":"萱萱","time":4,"title":"那些灿烂华美的瞬间…","url":"#"},
    {"name":"王二","time":10,"title":"国泰办理的失误…","url":"#"},
    {"name":"张三","time":4,"title":"广州3天涉黄…","url":"#"},
    {"name":"李四","time":8,"title":"最近听起不哈…","url":"#"},
    {"name":"王武","time":4,"title":"天气雨打…","url":"#"},
    {"name":"马子","time":20,"title":"今天会下雨吗…","url":"#"},
    {"name":"小而","time":21,"title":"明天我们有活动…","url":"#"}
]
var str ='';
var butUp=$("#updateUpBtn")//获取向上箭头
var butDown=$("#updateDownBtn")//获取向下箭头
var iNow2=0;/*默认当前是第0项*/
var timer2=null;/*初始化定时器*/
var len=arrdata.length;
/*<li><a href=" "><strong>萱萱</strong> <span>5分钟前</span> 写了一篇新文章：那些灿烂华美的瞬间…</a></li>*/
for(var i=0;i<len;i++){
    str+="<li><a href=''><strong>"+arrdata[i].name+
        "</strong><span>"+ arrdata[i].time+"分钟之前</span>写了一篇新文章："+ arrdata[i].title+"</a></li>"
}
aUl.html(str)
iH=aUl.find("li").height();//把li的高度获取


aDiv.hover(function () {clearInterval(timer2)},autoplays)
butUp.click(function(){
    doMove(-1);
})
butDown.click(function () {
    doMove(1)
})

function  autoplays(){
    timer2=setInterval(function () {
        doMove(-1)
    },1000)
}
autoplays()

function doMove(num){//自定义一个方法
    iNow2+=num;
    if(Math.abs(iNow2)>len-1){//由于num可以为任何数  导致iNow2可能为负数。可能为正数 ， 可能超过当前数组的长度显示空白
        iNow2=0;//
    }
    if(iNow2>0){
        iNow2=-(len-1);//如果是正会导致 ul往下滚  就让它滚到最后
    }
    aUl.stop().animate({"top":iH*iNow2},1000,'elasticOut')
}
//doMove(-6)