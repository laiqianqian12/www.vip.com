/* 
* @Author: anchen
* @Date:   2018-12-12 14:50:24
* @Last Modified by:   anchen
* @Last Modified time: 2018-12-14 09:02:43
*/

// 放大图片
 $('.zoompad').mouseover(function(e){
                $('.detail_content_img_zoomup').css('display','block');
                $('.blocks').css('display','block');

        })
        //绑定鼠标在原图窗口移动的事件
        $('.zoompad').mousemove(function(e){

                // 获取鼠标当前的位置
                var x=e.pageX;
                var y=e.pageY;
                // 获取原图窗口距离文档的偏移位置
                var sX=$('.zoompad').offset().left;
                var sY=$('.zoompad').offset().top;

                // 计算鼠标的相对位置（相对于原图窗口的偏移距离）
                var mx=x-sX;
                var my=y-sY;

                // 获取小框框的宽高
                var mw=$('.blocks').width()/2;
                var mh=$('.blocks').height()/2;

                // 鼠标移动后小框框的移动距离
                $('.blocks').css({left:mx-mw+'px',top:my-mh+'px'});

                // 获取小框框的偏移位置
                    var lw=$('.blocks').position().left;
                    var lh=$('.blocks').position().top;


                // 判断边界（小框框只能在原图窗口范围内移动）
                    var maxW=$('.zoompad').width()-$('.blocks').width()
                    var maxH=$('.zoompad').height()-$('.blocks').height()
                    // 左边界
                    if(lw<=0){$('.blocks').css('left','0px');}
                    // 右边界
                    if(lw>=maxW){
                        $('.blocks').css('left',maxW+'px');
                    }
                    // 上边界
                    if(lh<=0){$('.blocks').css('top','0px');}
                    // 下边界
                    if(lh>=maxH){
                        $('.blocks').css('top',maxH+'px');
                    }

                    // 获取小框框的偏移位置
                    var lw=$('.blocks').position().left;
                    var lh=$('.blocks').position().top;
                // 计算鼠标在小图里的位置  *2.5计算大图移动的比例
                    var newX=lw*2.85;
                    var newY=lh*2.85;

                $('.detail_content_img_zoomup img').css({left:-newX+'px',top:-newY+'px'});
        })
        //绑定鼠标离开原图窗口事件
        $('.zoompad').mouseout(function(){
                $('.detail_content_img_zoomup').css('display','none');
                $('.blocks').css('display','none');
        })


$(".detail_img-items .detail_img_itm").click(function(){

    $(".img_list_shgow").css("display","none").eq($(this).index()).css("display","block");
     $(".fd").css("opacity","0").eq($(this).index()).css("opacity","1");
})


$("#Caradd_submit").click(function() {
  alert("当前无网络连接,请检查网络设置，稍后重试！")
});