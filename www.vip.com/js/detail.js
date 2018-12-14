/* 
* @Author: anchen
* @Date:   2018-12-12 11:11:59
* @Last Modified by:   anchen
* @Last Modified time: 2018-12-13 14:26:08
*/

// 商品详情选项卡

$(".select_second").click(function(){
    $(".select_second").css("color","#f10180").css("borderBottom","3px solid #f10180");
    $(".select_first").css("borderBottom","3px solid #000").css("color","#333")
 $("#shop_detail").css("display","none")
})
$(".select_first").click(function(){
    $(".select_first").css("color","#f10180").css("borderBottom","3px solid #f10180");
    $(".select_second").css("borderBottom","3px solid #000").css("color","#333")
 $("#shop_detail").css("display","block")
})


// 数量加减
// 1.数量减
$('.num-box .num-reduce').click(function(){
        var num=$(this).siblings('em').html();
        if(num>1){num--};
        $(this).siblings('em').html(num);
      
        if($(this).siblings('span').prop('class')==='duihao'){
            number-=1;
            summoney-=Number($(this).siblings('i').html());
            $('#car .sum p b').html(number);
            $('#car .sum p strong').html(summoney);
        }
    })


// 2.数量加
$('.num-box .num-add').click(function(){
        var num=$(this).siblings('em').html();
        if(num<10){num++};
        $(this).siblings('em').html(num);
      
        if($(this).siblings('span').prop('class')==='duihao'){
            number+=1;
            summoney+=Number($(this).siblings('i').html());
            $('#car .sum p b').html(number);
            $('#car .sum p strong').html(summoney);
        }
    })




