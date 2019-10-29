    //onclick x delete object from array
    //how do i add a function to a button that is dynamically generated?
    var removeItem = document.getElementById('x1');
    console.log(removeItem);
    for (var i = 0; i <removeItem.length; i++) {
        var button = removeItem[i];
        button.addEventListener('click', function(event) {
         console.log('clicked');   
         var buttonClicked = event.target;
            buttonClicked.parentElement.remove();
            updateCartTotal();
        })
    }

function updateCartTotal() {
    //update what was removed
}



function onLoad() {
    //generate cart objects
    var cc = JSON.parse(localStorage.getItem("couchCart"));
    console.log(cc);
    //generate cart qty
    var qty = parseInt(JSON.parse(localStorage.getItem("cart_qty")));
    console.log(qty);
    //style cart badge
    document.getElementById("cart_qty").textContent = qty;
    document.getElementById("cart_qty").style.background = "#8F351F";
    //insert totals
    var subtotal = qty*25;
    document.getElementById("subprice").textContent = '$'+subtotal;
    var tax = subtotal*0.1;
    document.getElementById("taxprice").textContent = '$'+tax;
    var shipping = 5;
    document.getElementById("shipcost").textContent = '$'+shipping;
    var total = subtotal + tax + shipping;
    document.getElementById("totalcost").textContent = '$'+total;
    //also need to append child after iterating through loop   
    var i;
    for (i=0; i < cc.length; i++) {
        var item = document.createElement('div'); //need to make sure this goes inside div id = cart contents and below h1 your cart?
        item.className = 'item';
        // var image;
        // if (cc[i].color.includes("Haze")) {
        //     image = 'cart_icon.png';
        // } else if (cc[i].color.includes("School")) {
        //     image = 'cart_icon2.png';
        // } else if (cc[i].color.includes("Denim")) {
        //     image = 'thumb1_denim.png';
        // } else if (cc[i].color.includes("Rainy")) {
        //     image = 'thumb1_rainy.png';
        // } 
        var img = cc[i].img;
        item.innerHTML = '<button id="x1">x</button>';
        item.innerHTML = '<img id="img1" src=img>'; //how do i make this a variable
        item.innerHTML = '<div id="name1">Couch pillow</div>';
        item.innerHTML = '<div id="color1">cc[i].color</div>';
        item.innerHTML = '<div id="fill1">cc[i].fill</div>';
        item.innerHTML = '<a href="fs_product.html" id="edit1" >EDIT SELECTION</a>';
        item.innerHTML = '<div id="price1">"$"+cc[i].price</div>';
        item.innerHTML = '<a id="qty1">Qty:   <input type="text" name="qty" placeholder=cc[i].qty value = cc[i].qty size="4.9"></a>';
        item.innerHTML = '<button id="update1">UPDATE</button>';
        // document.getElementById("color1").textContent = cc[i].color;
        // document.getElementById("fill1").textContent = cc[i].fill;
        // document.getElementById("price1").textContent = '$'+cc[i].price;
        // document.getElementById("qtyattribute").placeholder = cc[i].qty;
        // document.getElementById("qtyattribute").value = cc[i].qty;
        // if (cc[i].color.includes("Haze")) {
        //     document.getElementById("img1").src = 'cart_icon.png';
        // } else if (cc[i].color.includes("School")) {
        //     document.getElementById("img1").src = 'cart_icon2.png';
        // } else if (cc[i].color.includes("Denim")) {
        //     document.getElementById("img1").src = 'thumb1_denim.png';
        // } else if (cc[i].color.includes("Rainy")) {
        //     document.getElementById("img1").src = 'thumb1_rainy.png';
        // } 
        var p = document.getElementById('yourcart');
        p.appendChild(item);
    }

    

}





// https://stackoverflow.com/questions/8316940/javascript-appending-another-div-data-on-div-tag-dynamically