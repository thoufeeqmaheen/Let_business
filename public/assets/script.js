const buttons = document.getElementsByTagName("button");
console.log(buttons);

buttons.addEventListener("click",() =>{
decodeURIComponent.getElementById("root").innerText = "clicked";

});
fetch("/api/v1/util/shop-list")
.then(r=>r.json())
.then(data=>{
    console.log(data);
})