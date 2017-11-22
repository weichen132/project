/**
 * Created by Administrator on 2017/7/12.
 */
var yhm;
var mm;
var yx;
var  hy;
var num;
var resultnum;
if(resultnum){
    num=resultnum
}else{
    num=2;
}
function huoqu(){
    num++;
    /*获取模态框的数据*/
    yhm=$("#yhm").val();
    mm=$("#mm").val();
    yx=$("#yx").val();
    /*获取会员*/
    var arrhy=$("#sel option");
    arrhy.each(function (i,v) {
        if(v.selected){
            hy= $(this).text();
        }
    })
    // alert(yhm+","+mm+","+yx+","+hy)
}
/*数据库的方法*/
var webStorage={};
webStorage.webSql=function(){
    var _dataBase;//数据库初始化
    /*创建数据库*/
    this.createDataBase= function () {
           if(_dataBase){
         return _dataBase;
         }
         _dataBase=openDatabase("gl","1.0","用户管理表",1024*1024,function(){})
         if(_dataBase){
        /* alert("数据库创建成功，放心使用")*/
             /*模态框提示，数据库创建成功，用户名添加成功*/
         }else {
       /*  alert(/!*"数据库创建失败"*!/)*/
         }
         return _dataBase;
    }
    /*创建数据表*/
    this.createTable= function () {
        var dataBase=this.createDataBase();//创建数据表之前，先打开数据库
        dataBase.transaction(function (tx) {
            tx.executeSql
            ("create table if not exists student(num REAL UNIQUE,yonghm TEXT,youx TEXT,yonghz TEXT)",[],
                function(){/*alert(/!*"创建数据表成功"*!/)*/},function(tx,err){/*alert(/!*"创建数据表失败"+err.message*!/)*/})
        })
    }
    /*插入数据表*/
    this.insert= function () {
        var dataBase=this.createDataBase();
        p.createTable();
        huoqu();
        dataBase.transaction(function(tx){
            tx.executeSql
            ("insert into student(num,yonghm,youx,yonghz) values(?,?,?,?)",[num,yhm,yx,hy],function(){/*alert("添加数据成功")*/},function(tx,err){/*alert("添加数据失败"+err.message)*/})
        })
        if(yhm){
            $("#shujuku").modal("show");
        }
    }
    /*把数据库里面的数据取出来，好在用户管理界面加载的时候后，调用生成页面*/
    this.find= function () {
        var dataBase=this.createDataBase();
        /*用户管理页面加载的时候，提示用户列表正在加载中，请稍等*/
        $("#jiazai").modal("show")
        dataBase.transaction(function (tx) {
            $("#no~tr").empty();
            tx.executeSql
            ("select * from student",[], function (tx,result) {
                console.log(result);
                for(var i=0;i<result.rows.length;i++){
                    resultnum=result.rows.item(i)["num"]/*数字号码 ,设成全局*/
                    var reslutyhm=result.rows.item(i)["yonghm"]/*用户名*/
                    var resultyx=result.rows.item(i)["youx"]/*邮箱*/
                    var buttonn=" <td class='dropdown'>" +
                        " <button class='btn dropdown-toggle' data-toggle='dropdown' >" +
                        "操作<span class='caret'></span>" +
                        "</button> <ul class='dropdown-menu'><li><a href='#'>编辑</a></li> <li><a href='#'>删除</a></li> <li><a href='#'>锁定</a></li> <li><a href='#'>修改密码</a></li> </ul> </td>";
                    var str="<tr><td>"+resultnum+"</td><td>"+reslutyhm+"</td><td>"+resultyx+"</td>"+buttonn+"</tr>"
                    $("#tab1").append(str);
                    $("a:contains('删除')").each(function (k,v) {
                        $(this).click(function () {//点击删除的时候
                            $("#shanchu").modal("show");
                            ($("a:contains('删除')").eq(k)).parent().parent().parent().parent().remove();

                        })
                    })
                    $("a:contains('编辑')").each(function (k,v) {
                        $(this).click(function () {
                            /*$("#myModal").modal("show");*/
                            ($("a:contains('编辑')").eq(k)).parent().parent().parent().parent().find("td").eq(1).html("<input class='form-control' type='text' style='width: 100px;background-color: #30353a;color: white;border: none;'>");
                            ($("a:contains('编辑')").eq(k)).parent().parent().parent().parent().find("td").eq(2).html("<input class='form-control' type='text' style='width: 200px;background-color: #30353a;color: white;border: none;'>");
                            /*修改*/
                            ($("a:contains('编辑')").eq(k)).parent().parent().parent().parent().find("input").eq(1).blur(function () {
                                /*alert(($("a:contains('编辑')").eq(k)).parent().parent().parent().parent().find("input").eq(0).val()+
                                    ","+ ($("a:contains('编辑')").eq(k)).parent().parent().parent().parent().find("input").eq(1).val())*/
                                //alert(k)

                                /*提示修改数据库成功的模态框*/
                                if(($("a:contains('编辑')").eq(k)).parent().parent().parent().parent().find("input").eq(1).val()){
                                    $("#xiugai").modal("show");
                                    p.update(($("a:contains('编辑')").eq(k)).parent().parent().parent().parent().find("input").eq(0).val(), ($("a:contains('编辑')").eq(k)).parent().parent().parent().parent().find("input").eq(1).val(), k+1)
                                }else{
                                    /*数据不能为空，添加数据库失败*/
                                    $("#shibai").modal("show");
                                }

                            })

                        })
                    })
                }

            })
            })

    }

    /*焦点失去的时候调用数据库修改事件*/
    /*修改数据库*/
    this.update= function (yonghm,youx,num) {
        var dataBase=this.createDataBase();
        dataBase.transaction(function (tx) {
            //alert(0)
            tx.executeSql
            ("update student set yonghm=? ,youx=? where num=?",[yonghm,youx,num], function () {},function(tx,err){"更新失败"+err.message})
        })
    }



    /*删除整个数据表的功能*/
    this.drop= function () {
        var dataBase=this.createDataBase();
        dataBase.transaction(function (tx) {
            tx.executeSql
            ("drop table student")
        })
    }

}

