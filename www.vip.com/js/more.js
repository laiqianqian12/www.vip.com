/* 
* @Author: anchen
* @Date:   2018-12-10 10:36:08
* @Last Modified by:   anchen
* @Last Modified time: 2018-12-13 15:12:55
*/
       // 注册主栏目底部更多按钮
var flag=true;
 $(".main-list-more").click(function(){
                                        if(flag){
                                        $(".more-button").css("display","none");
                                        $(".shou-button").css("display","block")
            $(".footer-content-main-more").css("display","block")
          }else{
             $(".more-button").css("display","block");
                                        $(".shou-button").css("display","none")
            $(".footer-content-main-more").css("display","none")
          }
       flag=!flag;
                                  })