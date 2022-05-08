

$(function(){
    let shoppcart = JSON.parse(localStorage.getItem('pay_list')) //--取localStorage的數據
    //--宣告好變數
    let p_nums = shoppcart['p_nums'];
    let shopping_nums = document.getElementsByClassName("shopping_nums")[0];
    shopping_nums.innerHTML = parseInt(shopping_nums.textContent) + parseInt(p_nums);
    console.log(shopping_nums.textContent);
    shopping_nums.style.display = "block";
})


const p_style1 = document.getElementsByClassName('p_style1')[0];
p_style1.addEventListener("click",function(){
    document.getElementsByClassName('products_photo')[0].style.backgroundImage='url(./img/products/p1.svg)';
    // bgi.addEventListener.style.backgroundimage="url('../img/products/p1.svg')";
    // p_style1.style.border = "2px solid red";
})
// document.activeElement("scroll",function(){
//     if(p_style1.onclick){
//     p_style1.style.border = "2px solid red";
// }else{

// };
// })

const p_style2 = document.getElementsByClassName('p_style2')[0];
p_style2.addEventListener("click",function(){
    document.getElementsByClassName('products_photo')[0].style.backgroundImage='url(./img/products/p2.svg)';
    // bgi.addEventListener.style.backgroundimage="url('../img/products/p1.svg')";
    // p_style1.remove.style.border = ("2px solid red");
})
const p_style3 = document.getElementsByClassName('p_style3')[0];
p_style3.addEventListener("click",function(){
    document.getElementsByClassName('products_photo')[0].style.backgroundImage='url(./img/products/p5.jpg)';
    // bgi.addEventListener.style.backgroundimage="url('../img/products/p1.svg')";
})
const p_style4 = document.getElementsByClassName('p_style4')[0];
p_style4.addEventListener("click",function(){
    document.getElementsByClassName('products_photo')[0].style.backgroundImage='url(./img/products/p6.jpg)';
    // bgi.addEventListener.style.backgroundimage="url('../img/products/p1.svg')";
})
const p_style5 = document.getElementsByClassName('p_style5')[0];
p_style5.addEventListener("click",function(){
    document.getElementsByClassName('products_photo')[0].style.backgroundImage='url(./img/products/p7.jpg)';
    // bgi.addEventListener.style.backgroundimage="url('../img/products/p1.svg')";
})



//--土炮購物車(還沒加動畫，只完成資料對應轉移至購物車頁面)

//--取得產品照，我用bgi所以才這樣抓，你是img就抓img
const p_photo = document.getElementsByClassName('products_photo')[0].getAttribute("data-bgurl");
// console.log(p_photo);(要確認抓對不對)
// ---取得商品名稱、數量、價格---
const p_id = document.getElementById("p_id"); //--名字
const p_num = document.getElementById("quantity");//--數量
const p_price = 3999;//--價格(其實要抓html裡的數字，但我懶)

// --取得加入購物車及結帳按鈕--
let go_to_pay = document.getElementById("go_to_pay");//--加入購物車
let go_to_pay_now = document.getElementById("go_to_pay_now")//--立即結帳
let pay_list = {};//--準備打包放入localStorage的資料夾



function GTP(e){
    let p_id_name = (p_id.textContent); //--取得商品名的文字
    let p_nums = (p_num.value); //--取得數量的數據
    let p_prices = (p_price) //--價格會隨數量變動
    let shoppcart = document.getElementsByClassName("shopping_nums")[0];
    // console.log(shoppcart_nums.textContent);
    shoppcart.style.display = "block";
    let shoppcart_nums = parseInt(shoppcart.textContent);
    shoppcart.innerHTML = shoppcart_nums + parseInt(p_nums);
    shoppcart.classList.add("s_a");
    pay_list={
        'p_photo':p_photo,
        'p_id_name':p_id_name,
        'p_prices':p_prices,
        'p_nums':parseInt(p_nums) + shoppcart_nums
    };//--打包物件列表
    // console.log(pay_list);//--確認打包的內容
    localStorage.setItem('pay_list',JSON.stringify(pay_list));//--存入
    e.preventDefault();//--防止冒泡事件用
}

//--原版(不重要，已另外編寫成一個函式)
go_to_pay.addEventListener("click",function(e){
    GTP(e);
    
    document.getElementsByClassName("shopping_nums")[0].classList.add("s_a");
    setTimeout(function(){
        document.getElementsByClassName("shopping_nums")[0].classList.remove("s_a");
    },300);
    // console.log(shoppcart_nums.textContent);
    // let p_nums = (p_num.value);
    // console.log(p_nums);
    // shoppcart.style.display = "block";
    // let shoppcart_nums = parseInt(shoppcart.textContent);
    // shoppcart.innerHTML = shoppcart_nums + parseInt(p_nums);
    // console.log(typeof(shoppcart_nums));
    // shoppcart.classList.add("s_a");

    // let p_id_name = (p_id.textContent);
    // let p_nums = (p_num.value);
    // let p_prices = (p_num.value * p_price)
    // //pay_list.push({p_photo,p_id_name,p_price,p_nums})
    // pay_list={
    //     'p_photo':p_photo,
    //     'p_id_name':p_id_name,
    //     'p_prices':p_prices,
    //     'p_nums':p_nums
    // };
    // console.log(pay_list);
    // localStorage.setItem('pay_list',JSON.stringify(pay_list));
    // e.preventDefault();
});

//--立即結帳按鈕(直接呼叫放入購物車函式加上導引至結帳頁)
go_to_pay_now.addEventListener("click",function(e){
    GTP(e);
    location.assign("../pay.html");
});

// $(function(){
//     $('.all_list').click(function(){
//         $('.header ul li>ul').css({
//             display: block,
//         })
//     })
//     $('.header ul li ul').click(function(){
//         $('.header ul li ul li').css({
//             display: block,
//         })
//     })
// })