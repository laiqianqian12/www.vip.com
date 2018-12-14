<?php
$userName=$_POST["user"];
$passWord=$_POST["password"];
$arr=array("15734551856","bb","cc","dd");
$arr2=array("15734551856"=>"lai123456","bb"=>"22","cc"=>"33","dd"=>"44");
if(in_array($userName,$arr)){
    if($arr2[$userName]==$passWord){
        echo '{"code":2}';
    }else{
        echo '{"code":1}';
    }
}else{
    echo '{"code":0}';
}
?>