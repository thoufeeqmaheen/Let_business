const buttons = document.getElementsByTagName("button");
console.log(buttons);

buttons.addEventListener("click",() =>{
decodeURIComponent.getElementById("root").innerText = "clicked";

});
console.log(document);

fetch("/api/v1/util/shop-list")
.then(r=>r.json())
.then(data=>{
    const out=data
    .map(
        (shop)=>
    <div>
    <p>
        shop:${shop.name}
    </p>
    <p>
        Address:${shop.address}
        </p>
        <p>
            phone:${shop.phone}
        </p>
        <h3>
            Products
        </h3>
        <ul>
            ${
                shop.products.map(
                    product=>`<li>${product.name}`
                ).join("")
            }
            <li>
                pdt1
            </li>
            <li>
                pdt2
            </li>
        </ul>

</div>
    )
.join("");
document.getElementById("shop-list").innerHTML = out;
});