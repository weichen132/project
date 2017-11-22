var arr=["title1","title2","title3","title4","title5","title6","title7","title8"];
function show(num){/*点击左侧导航，改变右侧查询机票*/
    for(var i=0;i<arr.length;i++){
        document.getElementById(arr[i]).style.display="none"
    }
    document.getElementById(arr[num]).style.display="block";
}


var aaa=["title1_3","title1_4"];
function s(num1){/*点击国内机票，改变查询结果*/
    for(var j=0;j<aaa.length;j++){
        document.getElementById(aaa[j]).style.display="none";
    }
    document.getElementById(aaa[num1]).style.display="block";
}


var ii=1 ;
function a(){//点击上海输入框的时候，显示各个城市的列表
    if(ii%2!=0){
        document.getElementById("yc1").style.display="block";
    }else{
        document.getElementById("yc1").style.display="none";
    }
    ii++;
}

/*按国内热门的时候.出现不同的城市*/
var ddd=["yc3","yc4","yc5","yc6","yc7","yc8","yc9"];
function d(num2){
    for(var j=0;j<ddd.length;j++){
        document.getElementById(ddd[j]).style.display="none";
    }
    document.getElementById(ddd[num2]).style.display="block";
}