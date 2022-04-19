
// var icon =document.getElementsByClassName("fa-solid");
document.addEventListener('scroll', function() {
    if(window.scrollY >= 700){
        //要做的事情放這邊
        document.getElementsByClassName("logo")[0].src ="./LOGO_F2_B.png";
        var icon =document.getElementsByClassName("fa-solid");
        for(let i = 0; i< icon.length; i++){
            // console.log(icon[i]);
            icon[i].style.color = "black";
        }
    }else{
        document.getElementsByClassName("logo")[0].src ="./LOGO_F2W_1.png";
        var icon =document.getElementsByClassName("fa-solid");
        for(let i = 0; i< icon.length; i++){
            // console.log(icon[i]);
            icon[i].style.color = "white";
        }
    }        
});
var b4h2_at_high = 1200;//設定高度

document.addEventListener('scroll', function() {
    if(window.scrollY >= b4h2_at_high){
        //要做的事情放這邊
    document.getElementsByClassName("b4tb_h2")[0].classList.add("b4h2_at");
    }           
});

var b2_high = 200;//設定高度

document.addEventListener('scroll', function() {
    if(window.scrollY >= b2_high){
    document.getElementsByClassName("banner2_tb")[0].classList.add('-animation');
    }           
});

var click_a = document.getElementsByClassName("more_ts1")[0];
click_a.addEventListener("click",function(){
    document.getElementsByClassName("ts1")[0].src = "500px";
});