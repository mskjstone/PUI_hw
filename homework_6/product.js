var cart_qty = 0;

function addToCart() {
    // debugger;
    var cart_added_qty = document.getElementById("qty_select").value;
    cart_added_qty = parseInt(cart_added_qty,10);
    // debugger;
    cart_qty = cart_qty + cart_added_qty;
    document.getElementById("cart_qty").textContent = cart_qty;
    document.getElementById("cart_qty").style.background = "#8F351F";
}

// add onclick="changeColor()" to images
// function changeColor() {
//     document.getElementById("thumb1").src = 
    // what is the best way to write a function to change?
//}

/* onclick color1.png 
set color1.png to color1shadow.png, color2.png (all without shadows)
set productmain to productmain.png
set gallery1 to gallery11.png, gallery2 to gallery12.png 
change text */