/* 
* @Author: anchen
* @Date:   2018-12-10 15:39:36
* @Last Modified by:   anchen
* @Last Modified time: 2018-12-13 15:33:56
*/



// 用户名调试
$("#L_mobile_name").blur(function(){
     
 var res=/^1\d{10}$/.test($(this).val());
 if(!res){ 
           $(".if-input-wrong").css("display","block");
             $(".input-blur").css("display","none");
             $("#L_mobile_name").css("border","1px solid #f64a4a")
            $(".if-phone-wrong").css("display","block")
                  }else{
                $(".if-input-wrong").css("display","none");
             $(".input-blur").css("display","none");
             $("#L_mobile_name").css("border","1px solid #333")
            $(".if-phone-wrong").css("display","none");
          
                  }
                  
})
// 验证码输入
$("#L_verifiCode_name").blur(function(){
                          
    if(!($(this).val()===$("#box").html())){
            $(".verifiCode-if-input-wrong").css("display","block");
           
             $("#L_verifiCode_name").css("border","1px solid #f64a4a")
            $(".if-verifiCode-wrong").css("display","block")

                           }else{
                     $(".verifiCode-if-input-wrong").css("display","none");
             $("#L_verifiCode_name").css("border","1px solid #2b2b2b")
            $(".if-verifiCode-wrong").css("display","none");
          
                 }
                })
 // 验证码
var box=document.getElementById("box")
               var arr=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
                    function changeCode(){
                     var str="";
                     for(var i=0;i<6;i++){
                         var index=parseInt(arr.length*Math.random())
                         str+=arr[index];
                     }
                     box.innerHTML=str;  
                    }
                    box.onclick=function(){
                     changeCode();
                    }

// 密码调试
$("#L_mobile_passwd").blur(function(){
     
  var res=/^[a-zA-Z0-9]\w{6,19}$/.test($(this).val())
 if(!res){ 
           $(".if-password-wrong").css("display","block");
             $("#L_mobile_passwd").css("border","1px solid #f64a4a")
            $(".if-passwd-wrong").css("display","block")
                  }else{
                $(".if-password-wrong").css("display","none");
             
             $("#L_mobile_passwd").css("border","1px solid #333")
            $(".if-passwd-wrong").css("display","none");
          
                  }
                  
})

// 确认密码调试
$("#L_mobile_passwd-config").blur(function(){
     
 
  if(!($(this).val()===$("#L_mobile_passwd").val())){ 
           $(".if-passwd-wrong-config").css("display","block");
             $("#L_mobile_passwd-config").css("border","1px solid #f64a4a")
            $(".if-password-config-wrong").css("display","block")
                  }else{
                $(".if-passwd-wrong-config").css("display","none");
             
             $("#L_mobile_passwd-config").css("border","1px solid #333")
            $(".if-password-config-wrong").css("display","none");
          
                  }
                  
})

// 注册按钮
$(".submit-btn").click(function(){
    $(this).val()===$("#box").html();
    $(this).val()===$("#L_mobile_passwd").val()
if($("#L_mobile_name").val()&&$("#L_mobile_passwd").val()){
    
     window.open("login.html","_self")
}
else{
    alert("请完成注册")
}
})