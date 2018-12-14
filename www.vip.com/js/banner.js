/* 
* @Author: anchen
* @Date:   2018-11-17 13:31:42
* @Last Modified by:   anchen
* @Last Modified time: 2018-12-13 15:31:46
*/


// 轮播图
 var tab=document.getElementById("tab")
     var next=document.getElementById("next")
     var pre=document.getElementById("pre")
     var oimg=document.getElementsByClassName("oimg")
      var lis=document.querySelectorAll("#page li")
  var pics=document.getElementById("pics")
      $.ajax({
          type:'get',
          url:'../php/index.php',
         data:"adata=banner",
        success:function(echo){
           var i=0;
           var str="";
          var timer=null;
          var a=JSON.parse(echo);
          $.each(a,function(index,item){
       if(index===0){
           str+=` <img src="${item.src}" style="opacity:1;" class="oimg">`
       }else{
        str+=` <img src="${item.src}" style="opacity:0;" class="oimg">`
       }
          })
       pics.innerHTML=str;


        // 自动播放函数调用
         autoPlay()
         // 下一张点击换图片
        next.onclick=function(){
           if(i>=9){
                i=-1
              }
              i++
              changeImg()
              changeColor()
        }
        // 上一张点击换图片
        pre.onclick=function(){
          if(i<=0){
           i=10
         }
         i--;
          changeImg()
          changeColor()
           
          }

        // 页码点击切换自身颜色和图片
        for(var t=0;t<lis.length;t++){
          lis[t].index=t;
          lis[t].onclick=function(){
                    i=this.index
            changeImg()
          changeColor()
          }

        }

        // 鼠标移入定时器停止
    tab.onmouseover=function(){
        clearInterval(timer)
    }
    // 鼠标移出定时器开始
    tab.onmouseout=function(){
        autoPlay();
    }

    // 切换图片函数
function changeImg(){
          for(var k=0;k<oimg.length;k++){
            oimg[k].style.opacity=0;
          }
          oimg[i].style.opacity=1;
         
        }

        // 页码切换颜色
        function changeColor(){
          for(var k=0;k<lis.length;k++){
            lis[k].style.background="yellow";
          }
          lis[i].style.background="#f10180";
        }

        // 定时器自动播放
        function autoPlay(){
          timer=setInterval(function(){
              if(i>=9){
                i=-1
              }
              i++
              changeImg()
              changeColor()
          },3000)
      }
        
       }
     })

