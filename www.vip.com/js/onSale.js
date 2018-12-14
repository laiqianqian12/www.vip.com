/* 
* @Author: anchen
* @Date:   2018-12-13 13:49:20
* @Last Modified by:   anchen
* @Last Modified time: 2018-12-13 15:14:23
*/
// 商品特卖实现前后端交互模拟数据
// 
// 商品活动
$.ajax({
          type:'get',
          url:'../php/index.php',
         data:"adata=onSaleAvitivity",
        success:function(echo){
           var str="";
          var a=JSON.parse(echo);
          $.each(a,function(index,item){
       str+=` 
      <section class="activity_items">
                    <a href=""><img src="${item.imgurl}"   alt="" class="activity_items_img"></a>
                    <li class="activity_items_hover_List">
                        <i class="iconfont icon-shoucang"></i>
                       <span>收藏品牌</span>
                 </li>
                  <section class="activity_items_bottom_content">
               <span class="activity_items_last_content_comment">${item.content}</span>
               <p class="activity_items_last_content_comment_time">
               <i class="iconfont icon-daojishi"></i>
               <span class="activity_items_last_content_comment_time_LastDate">剩${item.time}天</span></p>
             </section>
        </section>`
          })
      $("#activity_contents").html(str);
   }
})

// 女装
$.ajax({
          type:'get',
          url:'../php/index.php',
         data:"adata=women",
        success:function(echo){
           var str="";
          var a=JSON.parse(echo);
          $.each(a,function(index,item){
        str+=` 
       <section class="women_clothes_items">
                    <a href=""><img src="${item.imgurl}"   alt="" class="women_clothes_items_img"></a>
                    <li class="women_clothes_items_hover_List">
                        <i class="iconfont icon-shoucang"></i>
                       <span>收藏品牌</span>
                 </li>
                  <section class="women_clothes_items_bottom_content">
               <span class="women_clothes_items_last_content_comment">
               <span class="discount">${item.discount}</span>折起
               <span class="women_clothes_items_last_content_comment_text">${item.content}</span></span>
               <p class="women_clothes_items_last_content_comment_time">
               <i class="iconfont icon-daojishi"></i>
               <span class="women_clothes_items_last_content_comment_time_LastDate">剩${item.time}天</span></p>
             </section>
        </section>`
          })
      $("#women_clothes_contents").html(str);
   }
})


// 精选
$.ajax({
          type:'get',
          url:'../php/index.php',
         data:"adata=selection",
        success:function(echo){
           var str="";
          var a=JSON.parse(echo);
          $.each(a,function(index,item){
      str+=` 
      <section id="selection_block">
        <img src="${item.imgurl1}" alt="" class="selection_block_Topimg">
        <section class="selection_block_hover">
        <section class="selection_block_hover_Top">
           <li class="selection_block_hover_Top_list">
             <img src="${item.imgurl2}" alt="">
             <span>￥${item.price1}</span>
           </li>
           <li class="selection_block_hover_Top_list">
             <img src="${item.imgurl3}" alt="">
             <span>￥${item.price2}</span>
           </li>
          <li class="selection_block_hover_Top_list">
             <img src="${item.imgurl4}" alt="">
             <span>￥${item.price3}</span>
           </li>
          </section>
           <section class="selection_block_hover_Bottom">
             <img src="${item.imgurl5}" alt="" class="selection_block_hover_BottomImg">
             <li class="selection_block_hover_BottomList">
               <i class="iconfont icon-shoucang"></i>
               <span>收藏品牌</span>
             </li>
             <section id="selection_block_hover_Bottom_btn"><a href="">进入专场</a></section>
           </section>
        </section>
   </section>`
          })
      $("#selection_items").html(str);
   }
})

// 鞋包
$.ajax({
          type:'get',
          url:'../php/index.php',
         data:"adata=shoepackage",
        success:function(echo){
           var str="";
          var a=JSON.parse(echo);
          $.each(a,function(index,item){
       str+=` 
        <section class="shoe_package_items">
                    <a href=""><img src="${item.imgurl}"   alt="" class="shoe_package_items_img"></a>
                    <li class="shoe_package_items_hover_List">
                        <i class="iconfont icon-shoucang"></i>
                       <span>收藏品牌</span>
                 </li>
                  <section class="shoe_package_items_bottom_content">
               <span class="shoe_package_items_last_content_comment">
               <span class="discount">${item.discount}</span>折起
               <span>${item.content}</span></span>
               <p class="shoe_package_items_last_content_comment_time">
               <i class="iconfont icon-daojishi"></i>
               <span class="shoe_package_items_last_content_comment_time_LastDate">剩${item.time}天</span></p>
             </section>
        </section>`
          })
      $("#shoe_package_contents").html(str);
   }
})

// 其他栏目还没做