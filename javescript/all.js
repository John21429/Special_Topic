
// 漢堡
let listIcon = document.getElementsByClassName("listIcon")[0];
let closeIcon = document.getElementsByClassName("closeIcon")[0];
listIcon.addEventListener('click',function(){
    let navAllList = document.getElementsByClassName("navAllList")[0];
    let navList = document.getElementsByClassName("navList")[0];
    navAllList.style.height = "150px";
    if(window.innerWidth < 576){
        navAllList.style.height = "220px";
    }
    navList.style.display = "block";
    navList.style.display = "flex";
    let closeIcon = document.getElementsByClassName("closeIcon")[0];
    listIcon.style.display = "none";
    closeIcon.style.display = "block";
})
closeIcon.addEventListener('click',function(){
    let navAllList = document.getElementsByClassName("navAllList")[0];
    let navList = document.getElementsByClassName("navList")[0];
    navAllList.style.height = "0px";
    navList.style.display = "none";
    let closeIcon = document.getElementsByClassName("closeIcon")[0];
    listIcon.style.display = "block";
    closeIcon.style.display = "none";
})

let shoppcarts = JSON.parse(localStorage.getItem('pay_list'))
let p_nums = shoppcarts['p_nums'];
let shoppcart = document.getElementsByClassName("shopping_nums")[0];
let shoppcart_nums = parseInt(shoppcart.textContent);
shoppcart.innerHTML = shoppcart_nums + parseInt(p_nums);
shoppcart.style.display = "block";
