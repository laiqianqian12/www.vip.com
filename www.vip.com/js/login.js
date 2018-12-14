/* 
* @Author: anchen
* @Date:   2018-11-21 16:33:15
* @Last Modified by:   anchen
* @Last Modified time: 2018-12-13 15:06:41
*/
// 登录方式切换选项卡
$(".login-part-top-nav span").click(function(){
   $("span").css("color","#666").eq($(this).index()).css("color","#f10180");
   $("div").css("display","none").eq($(this).index()).css("display","block")
})

// 点击按钮判断是否符合标准
$("#loginBtn").click(function(){
    var ajax=new XMLHttpRequest();
    ajax.open("post","../php/login.php",true);
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    ajax.send("user="+username.value+"&password="+password.value);
    ajax.onreadystatechange=function(){
           if(ajax.readyState===4&&ajax.status===200){
              console.log(ajax.responseText)
              var res=JSON.parse(ajax.responseText).code;
              if(res===0){
                  alert("用户名不存在")
               }else if(res===1){
                  alert("密码错误")
               }else if(res===2){
                  
                  window.open("../html/loginsuccess.html","_self")
               }            
           }
        }
    })