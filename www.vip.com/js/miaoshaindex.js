/* 
* @Author: anchen
* @Date:   2018-12-13 13:28:23
* @Last Modified by:   anchen
* @Last Modified time: 2018-12-13 15:10:48
*/
// 秒杀主要商品列表，实现前后端交互



// 护肤
$.ajax({
          type:'get',
          url:'../php/index.php',
         data:"adata=hufu",
        success:function(echo){
         var str="";
          var a=JSON.parse(echo);
          $.each(a,function(index,item){
       str+=`<li><img src="${item.imgurl}" alt=""><a href="detail.html">${item.content}
</a><span>秒杀价￥${item.price} <s>￥${item.originalPrice}</s></span>
</li>`
          })
      $("#miaoshaList_hufu").html(str);
   }
})



// 家电
$.ajax({
          type:'get',
          url:'../php/index.php',
         data:"adata=jiadian",
        success:function(echo){
         var str="";
          var a=JSON.parse(echo);
          $.each(a,function(index,item){
       str+=`<li><img src="${item.imgurl}" alt=""><a href="detail.html">${item.content}
</a><span>秒杀价￥${item.price} <s>￥${item.originalPrice}</s></span>
</li>`
          })
      $("#miaoshaList_jiadian").html(str);
   }
})

// 家用
var miaoshaLis=document.getElementById('miaoshaList_jiayong')
    // 假如下面是通过后台传入的数据
    var data=[{
        imgurl:"../images/miaosha_jiayong/1.webp.jpg",
        content:"SUPIMA棉纱布条纹浴巾 大毛巾全棉成人浴巾  加大儿童浴巾70*140cm",
        price:119,
        originalPrice:299
    },{
        imgurl:"../images/miaosha_jiayong/2.webp.jpg",
        content:"MWE 旋转刀架不锈钢6件套套装刀具",
        price:188,
        originalPrice:496
    },{
        imgurl:"../images/miaosha_jiayong/3.webp.jpg",
        content:"漏水速干浴室拖鞋  男士女士拖鞋居家拖鞋",
            price:39,
         originalPrice:99
    },{
        imgurl:"../images/miaosha_jiayong/4.webp.jpg",
        content:"LOFTY CLOUD 印花冰丝凉席三件套-一抹清新",
        price:64,
        originalPrice:299
    },{
        imgurl:"../images/miaosha_jiayong/5.webp.jpg",
        content:"家庭组合必备 全棉加厚柔软吸水多色组合装毛巾 纯棉洗脸面巾",
        price:59,
        originalPrice:299
    },{
        imgurl:"../images/miaosha_jiayong/6.webp.jpg",
        content:"minizone 2件套沥水洗菜盆 ",
        price:59,
        originalPrice:159
    },{
        imgurl:"../images/miaosha_jiayong/7.webp.jpg",
        content:"酒店一只装决明子荞麦薰衣草柠檬草单人成人保健护颈枕头",
        price:110,
        originalPrice:328
    }];
    // 把数组每一条数据 进行拼接
    var str="";
    for(var i=0;i<data.length;i++){
        str+=`<li><img src="${data[i].imgurl}" alt=""><a href="detail.html">${data[i].content}
</a><span>秒杀价￥${data[i].price} <s>￥${data[i].originalPrice}</s></span>
</li>`
    }
miaoshaLis.innerHTML=str;



// 零食
var miaoshaLis=document.getElementById('miaoshaList_lingshi')
    // 假如下面是通过后台传入的数据
    var data=[{
         imgurl:"../images/miaosha_lingshi/1.webp.jpg",
        content:"整箱瑞士卷橙汁风味720g",
        price:45,
        originalPrice:59
    },{
         imgurl:"../images/miaosha_lingshi/2.webp.jpg",
        content:"好巴食 豆腐干（3味混合装）500g",
        price:29,
        originalPrice:65
    },{
         imgurl:"../images/miaosha_lingshi/33.webp.jpg",
        content:"原味榛子250g",
            price:39,
         originalPrice:55
    },{
         imgurl:"../images/miaosha_lingshi/4.webp.jpg",
        content:"好巴食 豆腐干（辣味混合装）500g",
        price:29,
        originalPrice:65
    },{
         imgurl:"../images/miaosha_lingshi/5.webp.jpg",
        content:"泰国原装进口冻干榴莲60g 休闲零食水果干金枕头榴莲干果脯冻干",
        price:49,
        originalPrice:99
    },{
         imgurl:"../images/miaosha_lingshi/6.webp.jpg",
        content:"原味正片猪肉脯零食休闲零食200g",
        price:37,
        originalPrice:89
    },{
         imgurl:"../images/miaosha_lingshi/7.webp.jpg",
        content:"怪味胡豆500g独立新包装",
        price:39,
        originalPrice:79
    }];
    // 把数组每一条数据 进行拼接
    var str="";
    for(var i=0;i<data.length;i++){
        str+=`<li><img src="${data[i].imgurl}" alt=""><a href="detail.html">${data[i].content}
</a><span>秒杀价￥${data[i].price} <s>￥${data[i].originalPrice}</s></span>
</li>`
    }
miaoshaLis.innerHTML=str;



// 母婴
var miaoshaLis=document.getElementById('miaoshaList_muying')
    // 假如下面是通过后台传入的数据
    var data=[{
         imgurl:"../images/miaosha_muying/1.webp.jpg",
        content:"帕玛氏可可脂胸部紧致霜125g 孕妇护肤品防止胸下垂",
        price:128,
        originalPrice:248
    },{
         imgurl:"../images/miaosha_muying/2.webp.jpg",
        content:"韩朵 孕妇化妆品珍彩蜜酿-水润光感凝彩遮瑕液（肌肤无瑕疵）",
        price:29,
        originalPrice:79
    },{
         imgurl:"../images/miaosha_muying/3.webp.jpg",
        content:"韩朵 孕妇化妆品珍彩蜜酿-魅影立体媚颜速写眉笔（画眉有神）",
            price:39,
         originalPrice:79
    },{
         imgurl:"../images/miaosha_muying/4.webp.jpg",
        content:"韩朵孕妇化妆刷 曲线轮廓弧度化妆刷 多功能",
        price:29,
        originalPrice:99
    },{
         imgurl:"../images/miaosha_muying/5.webp.jpg",
        content:">韩朵 孕妇护肤品玉璨雪臻-冰皙水漾晶莹洁面乳",
        price:39,
        originalPrice:69
    },{
         imgurl:"../images/miaosha_muying/6.webp.jpg",
        content:"韩朵 孕妇化妆品孕妇口红 花瓣哑光丝绒雾面唇膏（安全可吃）",
        price:55,
        originalPrice:199
    },{
         imgurl:"../images/miaosha_muying/7.webp.jpg",
        content:"五羊婴儿抑菌洗衣液500ml",
        price:25,
        originalPrice:49
    }];
    // 把数组每一条数据 进行拼接
    var str="";
    for(var i=0;i<data.length;i++){
        str+=`<li><img src="${data[i].imgurl}" alt=""><a href="detail.html">${data[i].content}
</a><span>秒杀价￥${data[i].price} <s>￥${data[i].originalPrice}</s></span>
</li>`
    }
miaoshaLis.innerHTML=str;


// 男装
$.ajax({
          type:'get',
          url:'../php/index.php',
         data:"adata=nanzhuang",
        success:function(echo){
         var str="";
          var a=JSON.parse(echo);
          $.each(a,function(index,item){
       str+=`<li><img src="${item.imgurl}" alt=""><a href="detail.html">${item.content}
</a><span>秒杀价￥${item.price} <s>￥${item.originalPrice}</s></span>
</li>`
          })
      $("#miaoshaList_nanzhuang").html(str);
   }
})


// 内衣
var miaoshaLis=document.getElementById('miaoshaList_neiyi')
    // 假如下面是通过后台传入的数据
    var data=[{
        imgurl:"../images/miaosha_neiyi/1.webp.jpg",
        content:"【纯棉中腰简约透气】（4条装）中腰三角内裤女纯色简约女裤透气纯棉内裤女士内裤",
        price:48,
        originalPrice:218
    },{
        imgurl:"../images/miaosha_neiyi/2.webp.jpg",
        content:"(4条装)卡帝乐鳄鱼男士舒适透气宽边明筋商务经典简约潮流时尚平角裤四角裤男士内裤",
        price:59,
        originalPrice:138
    },{
        imgurl:"../images/miaosha_neiyi/3.webp.jpg",
        content:"5条装 舒适百搭简约纯色中腰透气组合女士内裤",
            price:56,
         originalPrice:119
    },{
        imgurl:"../images/miaosha_neiyi/4.webp.jpg",
        content:"3条装 轻奢诱惑性感蕾丝中腰组合女士内裤",
        price:79,
        originalPrice:109
    },{
        imgurl:"../images/miaosha_neiyi/5.webp.jpg",
        content:"GOSO两件中腰蕾丝性感三分安全裤女士内裤",
        price:29,
        originalPrice:69
    },{
        imgurl:"../images/miaosha_neiyi/6.webp.jpg",
        content:"润微【透气吸汗 超值3条装】柔软棉质中低腰女包臀三角女士内裤",
        price:59,
        originalPrice:234
    },{
        imgurl:"../images/miaosha_neiyi/7.webp.jpg",
        content:"GOSO新品防静电印花南韩丝女士睡衣秋季经典丝质翻领开扣长袖休闲女睡衣家居服套装",
        price:139,
        originalPrice:299
    }];
    // 把数组每一条数据 进行拼接
    var str="";
    for(var i=0;i<data.length;i++){
        str+=`<li><img src="${data[i].imgurl}" alt=""><a href="detail.html">${data[i].content}
</a><span>秒杀价￥${data[i].price} <s>￥${data[i].originalPrice}</s></span>
</li>`
    }
miaoshaLis.innerHTML=str;


// 女装
var miaoshaLis=document.getElementById('miaoshaList_nvzhuang')
    // 假如下面是通过后台传入的数据
    var data=[{
         imgurl:"../images/miaosha_nvzhuang/1.webp.jpg",
        content:"Lagogo/拉谷谷2018年冬季新款时尚女拼接长袖连帽卫衣HCEE419G16",
        price:299,
        originalPrice:599
    },{
         imgurl:"../images/miaosha_nvzhuang/2.webp.jpg",
        content:"Lagogo2018秋季新款圆领格纹长袖连衣裙女收腰短款裙子HCLL449H36",
        price:299,
        originalPrice:618
    },{
         imgurl:"../images/miaosha_nvzhuang/3.webp.jpg",
        content:"Lagogo/拉谷谷2018年冬季新款时尚魅力系带女半身裙HCBB169C43",
            price:179,
         originalPrice:599
    },{
         imgurl:"../images/miaosha_nvzhuang/4.webp.jpg",
        content:"德玛纳dmestyle2018秋季新款兔毛柔软舒适毛衫韩版简约百搭宽松高领保暖线衫",
        price:229,
        originalPrice:799
    },{
         imgurl:"../images/miaosha_nvzhuang/5.webp.jpg",
        content:"2018新款台格妈妈装中老年女装棉服秋冬装棉袄气质连帽印花保暖加绒宽松版大码休闲棉衣女",
        price:495,
        originalPrice:1328
    },{
         imgurl:"../images/miaosha_nvzhuang/6.webp.jpg",
        content:"Lagogo/拉谷谷2018年冬季新款时尚女潮味港式连衣裙HCLL41XA41",
        price:249,
        originalPrice:499
    },{
         imgurl:"../images/miaosha_nvzhuang/7.webp.jpg",
        content:"德玛纳dmestyle2018秋季新款条纹喇叭袖衬衫纯色背心两件套欧美风条纹衬衫女",
        price:251,
        originalPrice:869
    }];
    // 把数组每一条数据 进行拼接
    var str="";
    for(var i=0;i<data.length;i++){
        str+=`<li><img src="${data[i].imgurl}" alt=""><a href="detail.html">${data[i].content}
</a><span>秒杀价￥${data[i].price} <s>￥${data[i].originalPrice}</s></span>
</li>`
    }
miaoshaLis.innerHTML=str;

// 箱包
var miaoshaLis=document.getElementById('miaoshaList_xiangbao')
    // 假如下面是通过后台传入的数据
    var data=[{
        imgurl:"../images/miaosha_xiangbao/1.webp.jpg",
        content:"2018年秋冬新款【真皮内里+超柔】时尚皮面圆头短靴舒适粗跟中跟拉链气质女靴百搭休闲靴子短靴",
        price:139,
        originalPrice:629
    },{
        imgurl:"../images/miaosha_xiangbao/2.webp.jpg",
        content:"【粗跟长靴 显瘦增高】2018秋冬加绒保暖休闲百搭粗跟长靴中高筒靴女靴",
        price:169,
        originalPrice:599
    },{
        imgurl:"../images/miaosha_xiangbao/3.webp.jpg",
        content:"新品绒面尖头深口套脚低跟通勤女单鞋",
            price:99,
         originalPrice:299
    },{
        imgurl:"../images/miaosha_xiangbao/4.webp.jpg",
        content:"【女款】简约内增高 懒人鞋",
        price:99,
        originalPrice:399
    },{
        imgurl:"../images/miaosha_xiangbao/5.webp.jpg",
        content:"2018年新款【牛皮】真皮女休闲鞋厚底内增高女款休闲鞋百搭系带舒适潮流女小白鞋圆头板鞋小白鞋女士休闲鞋",
        price:149,
        originalPrice:629
    },{
        imgurl:"../images/miaosha_xiangbao/6.webp.jpg",
        content:"秋季新品韩版真皮简约系带舒适真皮鞋垫平跟短靴街头百搭厚底机车马丁靴",
        price:179,
        originalPrice:639
    },{
        imgurl:"../images/miaosha_xiangbao/7.webp.jpg",
        content:"时尚英伦风系带加绒保暖平跟短靴",
        price:289,
        originalPrice:549
    }];
    // 把数组每一条数据 进行拼接
    var str="";
    for(var i=0;i<data.length;i++){
        str+=`<li><img src="${data[i].imgurl}" alt=""><a href="detail.html">${data[i].content}
</a><span>秒杀价￥${data[i].price} <s>￥${data[i].originalPrice}</s></span>
</li>`
    }
miaoshaLis.innerHTML=str;


// 其他栏目还没写