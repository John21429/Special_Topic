
// 漢堡
let listIcon = document.getElementsByClassName("listIcon")[0];
let closeIcon = document.getElementsByClassName("closeIcon")[0];
let navAllList = document.getElementsByClassName("navAllList")[0];
listIcon.addEventListener('click',function(){
    let navList = document.getElementsByClassName("navList")[0];
    if(window.innerWidth < 576){
        navAllList.style.height = "220px";
    }else{
        navAllList.style.height = "150px";
    }
    navList.style.display = "block";
    navList.style.display = "flex";
    let closeIcon = document.getElementsByClassName("closeIcon")[0];
    listIcon.style.display = "none";
    closeIcon.style.display = "block";
})
closeIcon.addEventListener('click',function(){
    let navList = document.getElementsByClassName("navList")[0];
    navAllList.style.height = "0px";
    navList.style.display = "none";
    let closeIcon = document.getElementsByClassName("closeIcon")[0];
    listIcon.style.display = "block";
    closeIcon.style.display = "none";
})

let shoppcart = JSON.parse(localStorage.getItem('pay_list')) //--取localStorage的數據

//--宣告好變數
let p_photo = shoppcart['p_photo'];
let p_id_name = shoppcart['p_id_name'];
let p_prices = shoppcart['p_prices'];
let p_nums = shoppcart['p_nums'];

//--確認內容是否正確
console.log(shoppcart);


$('.shopping_nums').css('display','block');
$('.shopping_nums').html(`${p_nums}`);
//--排好放進對應的位子
let inhtml =`
<ul>
<li><img src="${p_photo}" alt=""></li>
<li>${p_id_name}</li>
<li>${p_nums}</li>
<li>$${p_prices}</li>
<li><button class="deleteitem">刪除</button></li>
</ul>
`;
let p_totle = document.getElementById("totle");//--統計購物車金額用
let iteminfo = document.getElementsByClassName('iteminfo')[0];//--購物車列表的DIV(我ul他爸)
iteminfo.insertAdjacentHTML('afterbegin',inhtml);//--兒子都回家並回到各自的房間
p_totle.insertAdjacentHTML('afterbegin','$'+(p_prices *p_nums))//--統計金額
let delete_bt = document.getElementsByClassName("deleteitem")[0];//--商品最後的刪除按鈕

//--刪除按鈕事件綁定
delete_bt.addEventListener("click",function(){
    iteminfo.innerHTML= '';
    p_totle.innerHTML = '';
    localStorage.removeItem("pay_list");
    $('.shopping_nums').html('');
    $('.shopping_nums').css('display','none');
})

