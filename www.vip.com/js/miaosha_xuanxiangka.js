/* 
* @Author: anchen
* @Date:   2018-12-04 10:49:00
* @Last Modified by:   anchen
* @Last Modified time: 2018-12-13 15:07:29
*/
// 秒杀专区选项卡切换栏目
$("#miaosha_list_item li").mouseover(function(){
    $("#miaosha_list_item li").css("background","none").eq($(this).index()).css("background","#e40581");
     $("#miaosha_list_item li a").css("color","#666666").eq($(this).index()).css("color","#fff");
     $(".ms_bottom ul").css("opacity","0").eq($(this).index()).css("opacity","1")
})