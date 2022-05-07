
let shoppcarts = JSON.parse(localStorage.getItem('pay_list'))
let p_nums = shoppcarts['p_nums'];
let shoppcart = document.getElementsByClassName("shopping_nums")[0];
let shoppcart_nums = parseInt(shoppcart.textContent);
shoppcart.innerHTML = shoppcart_nums + parseInt(p_nums);
shoppcart.style.display = "block";