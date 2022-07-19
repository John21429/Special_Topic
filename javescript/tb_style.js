
// var icon =document.getElementsByClassName("fa-solid");

// document.addEventListener('scroll', function() {
//     let banner2 = document.getElementsByClassName("banner2")[0];
//     if(window.scrollY>=banner2.offsetTop){
//         //要做的事情放這邊
//         document.getElementsByClassName("logo")[0].src ="../javescript/LOGO_F2_B.svg";
//         var icon =document.getElementsByClassName("fa-solid");
//         for(let i = 0; i< icon.length; i++){
//             // console.log(icon[i]);
//             icon[i].style.color = "black";
//         }
//     }else{
//         document.getElementsByClassName("logo")[0].src ="../javescript/LOGO_F2W_1.svg";
//         var icon =document.getElementsByClassName("fa-solid");
//         for(let i = 0; i< icon.length; i++){
//             // console.log(icon[i]);
//             icon[i].style.color = "white";
//         }
//     }        
// });

// 倒數更換banner1背景圖
// var banner1_bgi = document.getElementsByClassName("banner1_bgi");
// setInterval(function a(){
//     // let bgi01 = document.getElementById('bgi01');
//     // bgi01.style.opacity='1';
//     console.log(banner1_bgi.length);
//     for(let i = 0; i <= banner1_bgi.length; i++){
//     let bgi00 = document.getElementById('bgi00');
//     bgi0[i].style.opacity='0';
//     bgi0[i+1].style.opacity='1';
//     if(i=5){
//         add.(a);
//     }
// }
// },3000);

// 杰哥版
// var banner1_bgi = document.getElementsByClassName('banner1_bgi')

// let banner1_i=1;
// let banner1_j;

// setInterval(function(){

    

//     banner1_j = banner1_i-1;

//     if(banner1_i==banner1_bgi.length){
//         banner1_i = 0;
//     }

//     banner1_bgi[banner1_i].style.visibility = "visible";

//     banner1_bgi[banner1_j].style.opacity = 0;
//     banner1_bgi[banner1_i].style.opacity = 1;

//     setTimeout( () => {
//         banner1_bgi[banner1_j].style.visibility = "hidden"
//     },500);

//     banner1_i ++;
//     // console.log(banner1_i)
// },3500);

// let bgi03 = document.getElementById("bgi03");
// bgi03.addEventListener("click",function(){
//     alert("ccccc")
// })



// 卷軸特效JQuery
// $(function(){
//     var e = $('.banner2').offset().top;

//     $(window).scroll(function(){

//         var N = $(window).screenTop();

//         if(N>e){
//             $('logo').src = "LOGO_F2_B.png"
//             $('fa-soild').color = 'black';
            
//         }else{
//             $('logo').src = "LOGO_F2W_1.png"
//             $('fa-soild').color = 'white';
//         }
//         ;
//     })
// });

// $('.backtptop').click(function(){
//     $('html, body').antimate ( scrolltop : 0 ),1000;
//     return:false;
// })

// $(function(){

//     $





// })


// const p_style1 = document.querySelector('p_style1');
// p_style1.addEventListener("click",function(){
//     let bgi = document.getElementsByClassName('products_photo')[0].style.backgroundimage="url('../img/products/p1.svg')";
//     // bgi.addEventListener.style.backgroundimage="url('../img/products/p1.svg')";
// })







// var b4_tb = document.getElementsByClassName("b4_tb")[0];//設定高度

// document.addEventListener('scroll', function() {
//     if(window.scrollY >= (b4_tb.offsetTop-200)){
//         // console.log(b4_tb.offsetTop-200);
//         //要做的事情放這邊
//     document.getElementsByClassName("b4tb_h2")[0].classList.add("b4h2_at");
//     }           
// });

// var banner2 = document.getElementsByClassName("banner2")[0];//設定高度

// document.addEventListener('scroll', function() {
//     if(window.scrollY >= (banner2.offsetTop/2)){
//     document.getElementsByClassName("banner2_tb")[0].classList.add('-animation');
//     }           
// });

// var click_a = document.getElementsByClassName("more_ts1")[0];
// click_a.addEventListener("click",function(){
//     document.getElementsByClassName("ts1")[0].src = "500px";
// });


// let gotop = document.getElementsByClassName("top_icon")[0];

// gotop.addEventListener("click", function(){

//     let current_high = window.scrollY;
//     let hight_cut = current_high / 100;

//     var interval_id = setInterval(function(){

//         if (current_high <= hight_cut){
//             clearInterval(interval_id);
//             document.body.scrollTop = 0;
//             document.documentElement.scrollTop = 0;
//         }else{
//             current_high -= hight_cut;
//             document.body.scrollTop = current_high;
//             document.documentElement.scrollTop = current_high;
//         }
        
//       }, 2);

// });
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function topFunction() {
    document.body.scrollTo({top:0,behavior:'smooth'}); // For Safari
    document.documentElement.scrollTo({top:0,behavior:'smooth'});// For Chrome, Firefox, IE and Opera
});

