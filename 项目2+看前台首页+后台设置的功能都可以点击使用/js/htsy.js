/**
 * Created by Administrator on 2017/7/9.
 */
window.onload= function () {

    /*曲线图表单数据*/
    var data = {
        labels : ["星期一","星期二","星期三","星期四","星期五","星期六","星期天"],
        datasets : [
            {
                fillColor : "rgba(220,180,170,0.5)",
                strokeColor : "rgba(220,180,170,1)",
                pointColor : "rgba(220,180,170,1)",
                pointStrokeColor : "#fff",
                data : [100,200,400,500,550,900,1000]
            },
            {
                fillColor : "rgba(151,187,205,0.5)",
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "#fff",
                data : [200,300,350,450,500,550,600]
            },
            {
                fillColor : "rgba(100,160,180,0.5)",
                strokeColor : "rgba(100,160,180,0.5)",
                pointColor : "rgba(100,160,180,0.5)",
                pointStrokeColor : "#fff",
                data : [100,125,145,250,350,300,400]
            }
        ]
    }
    /*后天首页留言板*/
    var ctx=document.getElementById("charts").getContext("2d");
    new Chart(ctx).Line(data)
    var btn1=document.getElementById("btn1");
    var texta=document.getElementById("texta");
    var ly=document.getElementById("ly");
    var iNow=window.localStorage.getItem("number")||0;//为了循环的次数，和接着上次的数字，继续保持localstrong
    /*封装了。将留言到留言板的信息*/
    function show(){
        var  num=Math.floor(Math.random()*2);
        var text1=texta.value;
        if(text1){
            window.localStorage.setItem("liuyan"+iNow,text1)
            iNow++;
            window.localStorage.setItem("number",iNow);
            if(num==0){
                ly.innerHTML+="<div class='panel panel-default pull-left' style='width: 500px;'> " +
                    "<div class='panel-heading' ><img style='width: 10%;height: 10%' src='images/a.png' alt=''><span>技术大牛：</span>"+text1+"</div> </div>";

            }else {
                ly.innerHTML+="<div class='panel panel-default pull-right' style='width: 500px;'> " +
                    "<div class='panel-heading text-right' ><span>小菜鸟：</span>"+text1+"<img style='width: 10%;height: 10%' src='images/i.png' alt=''></div> </div>";

            }

        }
    }
    btn1.onclick= function (){
        show();
        texta.value="";//清空
    }
    /*按下enter的时候 保存留言*/
    document.getElementsByTagName("body")[0].onkeydown= function (event) {
        if(event.keyCode==13){
           show();
            texta.value="";//清空
        }
    }
    /*页面加载时。找到localStrong中的数据，放回到留言板*/
    for(var j=0;j<iNow;j++){
        var t = window.localStorage.getItem("liuyan"+j);
        if(j%2!=0){
            ly.innerHTML+="<div class='panel panel-default pull-left' style='width: 500px;'> " +
                "<div class='panel-heading' ><img style='width: 10%;height: 10%' src='images/a.png' alt=''><span>技术大牛：</span>"+t+"</div> </div>";
        }else{
            ly.innerHTML+="<div class='panel panel-default pull-right' style='width: 500px;'> " +
                "<div class='panel-heading text-right' ><span>小菜鸟：</span>"+t+"<img style='width: 10%;height: 10%' src='images/i.png' alt=''></div> </div>";
        }

    }

}