var cc = JSON.parse(localStorage.getItem("couchCart"));
var qty = parseInt(JSON.parse(localStorage.getItem("cart_qty")));

function onLoad() {
    document.getElementById('cart_list').innerHTML="";
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

    console.log("test1");

    for (i=0; i < cc.length; i++) {
        var item = document.createElement('div'); //need to make sure this goes inside div id = cart contents and below h1 your cart?
        console.log("test2");
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
        item.innerHTML  = '<button class = "x" id="x' + i + '" onclick="removeItem(this.id)">x</button>'; //insert remove function here
        item.innerHTML += '<img id="img1" src=' +img +'>'; //how do i make this a variable
        item.innerHTML += '<div id="name1">Couch pillow</div>';
        item.innerHTML += '<div id="color1">' + cc[i].color + '</div>';
        item.innerHTML += '<div id="fill1">' + cc[i].fill + '</div>';
        item.innerHTML += '<a href="fs_product.html" id="edit1" >EDIT SELECTION</a>';
        item.innerHTML += '<div id="price1">$' + cc[i].price + '</div>';
        item.innerHTML += '<a id="qty1">Qty:   <input type="text" name="qty" placeholder="' + cc[i].qty +'" value ="' + cc[i].qty + '" size="4.9"></a>';
        item.innerHTML += '<button id="update1">UPDATE</button>';
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
        var p = document.getElementById('cart_list');
        p.appendChild(item);
        console.log(p);
    }

    

}

//onclick x delete object from array
function removeItem(id) { 
    item = parseInt(id.substring(1));
    console.log(cc);
    console.log("old");
    qty = qty - cc[item].qty;
    cc.splice(item,1);
    console.log(cc);
    localStorage.setItem("couchCart", JSON.stringify(cc));
    localStorage.setItem("cart_qty",qty);
    console.log(localStorage);
    onLoad();
    }



// https://stackoverflow.com/questions/8316940/javascript-appending-another-div-data-on-div-tag-dynamically