const num=document.getElementById("num");
const lower=document.getElementById("lower");
const add=document.getElementById("add");

var counter= 0;
add.addEventListener("click", () => {
 if (counter <= 49){
   counter += 1;
   num.innerHTML = counter;
 }
});

lower.addEventListener("click", () => {
 if (counter >= 1){
   counter -= 1;
   num.innerHTML = counter;
 }
});
