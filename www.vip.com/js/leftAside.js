/* 
* @Author: anchen
* @Date:   2018-11-11 23:13:15
* @Last Modified by:   anchen
* @Last Modified time: 2018-12-13 15:05:42
*/
// 左侧侧边栏
// 
var leftA=document.getElementById("leftAside")
var leftClass=document.getElementsByClassName("leftAsideClass")
var timer=null;
// 窗口滚动轴事件
    window.onscroll=function(){
        if(document.documentElement.scrollTop>1280){
            leftA.style.display="block";
          clearBg();
           leftClass[0].style.color="#e3007e";
        }else{
            leftA.style.display="none";
        }
        if(document.documentElement.scrollTop>=3040){
          
             clearBg()
            leftClass[1].style.color="#e3007e";
        }
        if(document.documentElement.scrollTop>=3840){
           
             clearBg()
            leftClass[2].style.color="#e3007e";
        }
        if(document.documentElement.scrollTop>=6684){
           
             clearBg()
            leftClass[3].style.color="#e3007e";
        }
        if(document.documentElement.scrollTop>=9440){
          
             clearBg()
            leftClass[4].style.color="#e3007e";
        }
        if(document.documentElement.scrollTop>=12240){
           
             clearBg()
            leftClass[5].style.color="#e3007e";
        }   
  
    if(document.documentElement.scrollTop>=15040){
           
             clearBg()
            leftClass[6].style.color="#e3007e";
        }   
  
    if(document.documentElement.scrollTop>=17840){
           
             clearBg()
            leftClass[7].style.color="#e3007e";
        }   

    if(document.documentElement.scrollTop>=20588){
           
             clearBg()
            leftClass[8].style.color="#e3007e";
        }   

    if(document.documentElement.scrollTop>=23392){
           
             clearBg()
            leftClass[9].style.color="#e3007e";
        }   

    if(document.documentElement.scrollTop>=26192){
           
             clearBg()
            leftClass[10].style.color="#e3007e";
        }   

    if(document.documentElement.scrollTop>=28992){
           
             clearBg()
            leftClass[11].style.color="#e3007e";
        }   
    
    if(document.documentElement.scrollTop>=31792){
           
             clearBg()
            leftClass[12].style.color="#e3007e";
        }   
    }
    // 清掉所有li的背景颜色
    function clearBg(){
        for(var i=0;i<leftClass.length;i++){
            leftClass[i].style.color="#fff";
        }
    }

// 点击切换对应的板块

      leftClass[0].onclick=function(){
         if(1580>=document.documentElement.scrollTop){
            layerMove("bottom",1580)
        }else{
            layerMove("top",1581)
        }  
     }
      leftClass[1].onclick=function(){
         if(3040>=document.documentElement.scrollTop){
            layerMove("bottom",3040)
        }else{
            layerMove("top",3040)
        }  
     }
       leftClass[2].onclick=function(){
         if(3840>=document.documentElement.scrollTop){
            layerMove("bottom",3840)
        }else{
            layerMove("top",3840)
        }  
     }
     leftClass[3].onclick=function(){
         if(6684>=document.documentElement.scrollTop){
            layerMove("bottom",6684)
        }else{
            layerMove("top",6684)
        }  
     }
        leftClass[4].onclick=function(){
         if(9440>=document.documentElement.scrollTop){
            layerMove("bottom",9440)
        }else{
            layerMove("top",9440)
        }  
     }
        leftClass[5].onclick=function(){
         if(12240>=document.documentElement.scrollTop){
            layerMove("bottom",12240)
        }else{
            layerMove("top",12240)
        }  
     }
   leftClass[6].onclick=function(){
         if(15040>=document.documentElement.scrollTop){
            layerMove("bottom",15040)
        }else{
            layerMove("top",15040)
        }  
     }
  leftClass[7].onclick=function(){
         if(17840>=document.documentElement.scrollTop){
            layerMove("bottom",17840)
        }else{
            layerMove("top",17840)
        }  
     }
     leftClass[8].onclick=function(){
         if(20588>=document.documentElement.scrollTop){
            layerMove("bottom",20588)
        }else{
            layerMove("top",20588)
        }  
     }
       leftClass[9].onclick=function(){
         if(23392>=document.documentElement.scrollTop){
            layerMove("bottom",23392)
        }else{
            layerMove("top",23392)
        }  
     }
      leftClass[10].onclick=function(){
         if(26192>=document.documentElement.scrollTop){
            layerMove("bottom",26192)
        }else{
            layerMove("top",26192)
        }  
    }
 leftClass[11].onclick=function(){
         if(28992>=document.documentElement.scrollTop){
            layerMove("bottom",28992)
        }else{
            layerMove("top",28992)
        }  
    }
leftClass[12].onclick=function(){
         if(31792>=document.documentElement.scrollTop){
            layerMove("bottom",31792)
        }else{
            layerMove("top",31792)
        }  
    }


// 定时器滚动事件
var timer=null;
  function layerMove(dir,end){
     clearInterval(timer);
     if(dir==="top"){
        timer=setInterval(function(){
            document.documentElement.scrollTop=document.documentElement.scrollTop-250;
            if(document.documentElement.scrollTop<=end){
                document.documentElement.scrollTop=end;
                clearInterval(timer)
            }
         })
     }else{
        timer=setInterval(function(){
            document.documentElement.scrollTop=document.documentElement.scrollTop+250;
            if(document.documentElement.scrollTop>=end){
                document.documentElement.scrollTop=end;
                clearInterval(timer)
            }
         }) 
     }
 }