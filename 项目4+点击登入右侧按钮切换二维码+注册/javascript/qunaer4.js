var arr=["title1","title2","title3","title4","title5","title6","title7","title8"];
function show(num){/*点击左侧导航，改变右侧查询机票*/
    for(var i=0;i<arr.length;i++){
        document.getElementById(arr[i]).style.display="none"
    }
    document.getElementById(arr[num]).style.display="block";
}


var aaa=["title1_3","title1_3"];
function s(num1){/*点击国内机票，改变查询结果*/
    for(var j=0;j<aaa.length;j++){
        document.getElementById(aaa[j]).style.display="none";
    }
    if(num1==0){
        document.getElementById(aaa[num1]).style.display="block";
        document.getElementById("span3").style.display="none";
        document.getElementById("x1").checked="checked";
        document.getElementById("in3").value="2017-6-12";
        document.getElementById("in4").value="";
        document.getElementById("pp1").style.display="block";
        document.getElementById("chengren").style.display="none";

    }
    if(num1==1){
        document.getElementById(aaa[num1]).style.display="block";
        document.getElementById("span3").style.display="block";
        document.getElementById("x2").checked="checked";
        document.getElementById("in3").value="2017-6-25";
        document.getElementById("in4").value="2017-7-02";
        document.getElementById("pp1").style.display="none";
        document.getElementById("chengren").style.display="block";
    }



}

/*点击之后，数字进入输入框*/
var nummm;
function show11(nummm){
    document.getElementById("in5").value=nummm;
    document.getElementById("shuzi").style.display="none";

}
/*点击之后，下拉数字框消失*/
function ll(){
    if(ii%2!=0){
        document.getElementById("shuzi").style.display="block";
        document.getElementById("bb").style.webkitTransform="rotate(180deg)";
    }else{
        document.getElementById("shuzi").style.display="none";
        document.getElementById("bb").style.webkitTransform="rotate(360deg)";
    }
    ii++;
}


var ii=1 ;
function a(){//点击上海输入框的时候，显示各个城市的列表
    /*动态改变relative 的 位置，往下移动.style.top*/
    document.getElementById("yc1").style.top="0px";
    if(ii%2!=0){
        document.getElementById("yc1").style.display="block";
    }else{
        document.getElementById("yc1").style.display="none";
    }
    ii++;
}


function login(){//点击返回输入框的时候，显示城市列表
    /*动态改变relative 的 位置，往下移动.style.top*/
    document.getElementById("yc1").style.top="55px";
    if(ii%2!=0){

            document.getElementById("yc1").style.display="block";
        }else{
            document.getElementById("yc1").style.display="none";
        }
        ii++;

}


/*点击右边第一个日期输入框，显示时间列表*/
function time1(){
    document.getElementById("date1").style.top="40px";
    if(ii%2!=0){
        document.getElementById("date1").style.display="block";
    }else{
        document.getElementById("date1").style.display="none";
    }
    ii++;
}

function login2(){//点击右边第二个输入框。显示时间
    /*动态改变relative 的 位置，往下移动.style.top*/
    document.getElementById("date1").style.top="93px";
    if(ii%2!=0){

        document.getElementById("date1").style.display="block";
    }else{
        document.getElementById("date1").style.display="none";
    }
    ii++;

}

/*按国内热门的时候.出现不同的城市*/
var ddd=["yc3","yc4","yc5","yc6","yc7","yc8","yc9"];
var fff=["a0","a1","a2","a3","a4","a5","a6"];
function d(num2){
    for(var j=0;j<ddd.length;j++){
        document.getElementById(ddd[j]).style.display="none";
    }
    document.getElementById(ddd[num2]).style.display="block";

    for(var h=0;h<fff.length;h++){
        document.getElementsByClassName("i1")[0].style.display="none";
        document.getElementsByClassName("i2")[0].style.display="none";
        document.getElementById(fff[h]).style.borderBottom="none";
    }
    document.getElementById(fff[num2]).style.borderBottom="1px solid #02afc7";
    if(num2==0){
        document.getElementsByClassName("i1")[0].style.display="block";
        document.getElementsByClassName("i2")[0].style.display="block";
    }

}

/*点击换的时候，出发地和返回地互相换掉*/
/*数字++，基数的时候上海在上面，偶数的时候清空上面的输入框，上海在下面*/
var chan=1;
function change(){
    var in1=document.getElementById("in1").value;
    var in2=document.getElementById("in2").value;
    if(chan%2!=0){
        document.getElementById("in2").value=in1;
        document.getElementById("in1").value=in2;
    }else{

        document.getElementById("in1").value=in2;
        document.getElementById("in2").value=in1;
    }
    chan++;

}

/*点击改变时间列表,改变时间div外围整个div*/
/*如果用getElementsByClassName，返回的是一个集合*/
var q=-310;
function changeTime1(){
    var obj=document.getElementById("tab1");
        obj.style.transition="-webkit-transform 500ms ease-out";
        obj.style.webkitTransform="translate("+q+"px,0px)";
        q=q-310;

}
/*alert(changeTime1());*/

function ccccc(){
/* document.getElementById("tab1").style.left="310px"*/
    q=-310;
    var obj2=document.getElementById("tab1");
    obj2.style.transition="-webkit-transform 500ms ease-out";
    obj2.style.webkitTransform="translate("+0+"px,0px)";
}

function hh(chan){
    if(chan==1){
        document.getElementById("in4").value="";
    }
    if(chan==2){
        document.getElementById("in4").value="2017-6-14";
    }
}

/*点击问字进入选框*/
window.onload=function(){
    var arr=document.getElementsByTagName("a");
    for(i=0;i<arr.length;i++) {
        if(arr[i].className=="ABC") {/*当找到标签clasname为ABC的时候，给他绑定点击事件*/
           /* alert("0");*/
            arr[i].onclick=function (){
        document.getElementById("in1").value=this.innerHTML;
                /*alert("1");*/
              document.getElementById("yc1").style.display="none";
                ii=1;/*从新赋值为1.不然会出现，点2次输入框才出现城市列表*/
        }
        }
        if(arr[i].className=="one"){
            arr[i].onclick=function(){
                document.getElementById("in3").value="2017-6-"+this.innerHTML;
                var ff="2017-6-"+this.innerHTML;
               if( ff=="2017-6-30"){
                   document.getElementById("in4").value="2017-7-02";
            }else if(ff=="2017-6-29"){
                   document.getElementById("in4").value="2017-7-01";
               }
               else {
                   document.getElementById("in4").value="2017-6-"+(parseInt(this.innerHTML)+2);
               }


                if(this.innerHTML=="今天"){
                    document.getElementById("in3").value="2017-6-12";
                    document.getElementById("in4").value="2017-6-14";
                }
                document.getElementById("date1").style.display="none";
                ii=1;
            }
        }
      }
    }


/*点击空白处，下拉列表消失*/
function gggg(event)
{
    x=event.clientX
    y=event.clientY
    /*alert("X coords: " + x + ", Y coords: " + y)*/
    if(x>653||x<145||y<184||y>500){
        document.getElementById("yc1").style.display="none";
        ii=1;
    }
    if(y<210||x<380){
        document.getElementById("date1").style.display="none";
        ii=1;

    }
   /* if(x>630||x<400||y<150||y>710){
        document.getElementById("date1").style.display="none";


    }*/
}


/*图片自动相对定位，往左边移动*/
/*var nn=0;
function play1(){
    document.getElementById("box2_div").style.left=nn+"px";
    if(nn==-3020){
        nn=0;
    }
    nn=nn-755;
 }*/
/*window.onload=function (){
    setInterval(play1,2000);
}*/
/*function play(){
    alert("11")
}*!/*/


