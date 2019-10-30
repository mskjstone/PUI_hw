//if localstorage exists

var cart_qty = 0;
var cart_contents = [];

function Pillow(color,fill,qty,price,img) {
    this.color = color;
    this.fill = fill;
    this.qty = qty;
    this.price = price;
    this.img = img;
}

function addToCart() {
    // get number added to cart
    var cart_added_qty = document.getElementById("qty_select").value;
    cart_added_qty = parseInt(cart_added_qty,10);
    // add to existing cart qty
    cart_qty = cart_qty + cart_added_qty;
    //style cart badge
    document.getElementById("cart_qty").textContent = cart_qty;
    document.getElementById("cart_qty").style.background = "#8F351F";
    //get pillow attributes
    // var qty = parseInt(document.getElementById("cart_qty").textContent);
    var qty = cart_added_qty; /*this is struggling - getting total and not single instance selected*/
    var color = document.getElementById("currentcolor").textContent;
    var fill = document.getElementById("currentfill").textContent;
    var price = 25*qty;
    let img;
    if (color.includes("Haze")) {
        img = 'cart_icon.png';
    } else if (color.includes("School")) {
        img = 'cart_icon2.png';
    } else if (color.includes("Denim")) {
        img = 'thumb1_denim.png';
    } else if (color.includes("Rainy")) {
        img = 'thumb1_rainy.png';
    } 
    //append new pillow to cart_contents
    cart_contents.push(new Pillow(color,fill,qty, price, img));
    console.log(cart_contents);
    //local storage
    localStorage.setItem("couchCart", JSON.stringify(cart_contents));
    localStorage.setItem("cart_qty",cart_qty);
    //prints ok but needs to return a value?
}


//approach https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_state_if_id

function selectColor(clicked) {
    var id = clicked.id;
    if (id === "color1") {
    // border shadows
    document.getElementById("color1").style.borderColor = "#863522";
    document.getElementById("color2").style.borderColor = "#FFFFFF";
    document.getElementById("color3").style.borderColor = "#FFFFFF";
    document.getElementById("color4").style.borderColor = "#FFFFFF";
    //text
    document.getElementById("currentcolor").textContent = "Color: Morning Haze";
    //main =
    document.getElementById("productmain").src = "productmain.png";
    //thumb 
    document.getElementById("thumb1").src = "thumb1.png";
    document.getElementById("thumb2").src = "thumb2.png";
    document.getElementById("thumb3").src = "thumb3.png";
    document.getElementById("thumb4").src = "thumb4.png";
    } else if (id === "color2") {
      // border shadows
      document.getElementById("color1").style.borderColor = "white";
      document.getElementById("color2").style.borderColor = "#863522";
      document.getElementById("color3").style.borderColor = "#FFFFFF";
      document.getElementById("color4").style.borderColor = "#FFFFFF";
      // text
      document.getElementById("currentcolor").textContent = "Color: After School Special";
      //main
      document.getElementById("productmain").src = "main_school.png";
      //thumbs
      document.getElementById("thumb1").src = "thumb1_school.png";
      document.getElementById("thumb2").src = "thumb2_school.png";
      document.getElementById("thumb3").src = "thumb3_school.png";
      document.getElementById("thumb4").src = "thumb4_school.png";
    } else if (id === "color3") {
      // border shadows
      document.getElementById("color1").style.borderColor = "white";
      document.getElementById("color2").style.borderColor = "white";
      document.getElementById("color3").style.borderColor = "#863522";
      document.getElementById("color4").style.borderColor = "#FFFFFF";
      //text
      document.getElementById("currentcolor").textContent = "Color: Cozy Denim";
      //main
      document.getElementById("productmain").src = "main_denim.png";
      //thumbs
      document.getElementById("thumb1").src = "thumb1_denim.png";
      document.getElementById("thumb2").src = "thumb2_denim.png";
      document.getElementById("thumb3").src = "color3.png";
      document.getElementById("thumb4").src = "thumb4_denim.png";
    } else {
      //color 4
      // border shadows
      document.getElementById("color1").style.borderColor = "white";
      document.getElementById("color2").style.borderColor = "white";
      document.getElementById("color3").style.borderColor = "white";
      document.getElementById("color4").style.borderColor = "#863522";
      // text
      document.getElementById("currentcolor").textContent = "Color: Rainy Day";
      //main
      document.getElementById("productmain").src = "main_rainy.png";
      //thumbs
      document.getElementById("thumb1").src = "thumb1_rainy.png";
      document.getElementById("thumb2").src = "thumb2_rainy.png";
      document.getElementById("thumb3").src = "thumb3_rainy.png";
      document.getElementById("thumb4").src = "thumb4_rainy.png";

    }
}


function selectFill(clicked) {
    var id = clicked.id;
    if (id === "fill1") {
        document.getElementById("currentfill").textContent = "Fill: Poly";
        document.getElementById("fill1").style.borderColor = "#863522";
        document.getElementById("fill2").style.borderColor = "white";
        document.getElementById("fill3").style.borderColor = "white";
      } else if (id === "fill2") {
        document.getElementById("currentfill").textContent = "Fill: Down";
        document.getElementById("fill1").style.borderColor = "white";
        document.getElementById("fill2").style.borderColor = "#863522";
        document.getElementById("fill3").style.borderColor = "white";
      } else {
        document.getElementById("currentfill").textContent = "Fill: Foam";
        document.getElementById("fill1").style.borderColor = "white";
        document.getElementById("fill2").style.borderColor = "white";
        document.getElementById("fill3").style.borderColor = "#863522";
      }

}

function selectThumb(clicked) {
    var color = document.getElementById("thumb1").src;
    var id = clicked.id;
    if (color.includes("denim") && id === "thumb1") {
        document.getElementById("productmain").src = "main_denim.png";
    } else if (color.includes("denim") && id === "thumb2") {
        document.getElementById("productmain").src = "m2_denim.png";
    } else if (color.includes("denim") && id === "thumb3") {
        document.getElementById("productmain").src = "m3_denim.png";
    } else if (color.includes("denim") && id === "thumb4") {
        document.getElementById("productmain").src = "m4_denim.png";
    } else if (color.includes("rainy") && id === "thumb1") {
        document.getElementById("productmain").src = "main_rainy.png";
    } else if (color.includes("rainy") && id === "thumb2") {
        document.getElementById("productmain").src = "m2_rainy.png";
    } else if (color.includes("rainy") && id === "thumb3") {
            document.getElementById("productmain").src = "m3_rainy.png";
    } else if (color.includes("rainy") && id === "thumb4") {
        document.getElementById("productmain").src = "m4_rainy.png";
    } else if (color.includes("school") && id === "thumb1") {
        document.getElementById("productmain").src = "main_school.png";
    } else if (color.includes("school") && id === "thumb2") {
        document.getElementById("productmain").src = "m2_school.png";
    } else if (color.includes("school") && id === "thumb3") {
        document.getElementById("productmain").src = "m3_school.png";
    } else if (color.includes("school") && id === "thumb4") {
        document.getElementById("productmain").src = "m4_school.png";
    } else if (color.includes("1.") && id === "thumb1") {
        document.getElementById("productmain").src = "productmain.png";
    } else if (color.includes("1.") && id === "thumb2") {
        document.getElementById("productmain").src = "m2_morning.png";
    } else if (color.includes("1.") && id === "thumb3") {
        document.getElementById("productmain").src = "m3_morning.png";
    } else if (color.includes("1.") && id === "thumb4") {
        document.getElementById("productmain").src = "m4_morning.png";
    }
}

