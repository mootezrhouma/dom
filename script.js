var add = document.getElementsByClassName("add");
var count = document.getElementsByClassName("count");
var moins = document.getElementsByClassName("moins");

for (var i = 0; i < add.length; i++) {
  var ad = add[i];
  let coun = count[i];
  ad.addEventListener("click", function () {
    coun.innerHTML++;
    total();
  });
}
for (var i = 0; i < moins.length; i++) {
  var moi = moins[i];
  let coun = count[i];
  moi.addEventListener("click", function () {
    if (coun.innerHTML > 0) coun.innerHTML--;
    total();
  });
}
var contain = document.getElementsByClassName("container1");
var del = document.getElementsByClassName("del");

for (var i = 0; i < contain.length; i++) {
  let con = contain[i];
  let dell = del[i];
  
  dell.addEventListener("click", function () {
    con.remove();
    total();
  });
}
var like = document.getElementsByClassName("like");
for (var i = 0; i < like.length; i++) {
  let li = like[i];
  li.addEventListener("click", function () {
    if (li.style.color != "red") li.style.color = "red";
    else li.style.color = "black";
  });
}
var totalp= document.getElementById("totals")

var price = document.getElementsByClassName("price");
var count = document.getElementsByClassName("count");


function total() {
  
  let sum = 0;
  for (let index = 0; index < price.length; index++) {
   
    

  sum = sum + parseInt(price[index].innerHTML) * parseInt(count[index].innerHTML); 
}

  totalp.innerHTML=sum
  
}