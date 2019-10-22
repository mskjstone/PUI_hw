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

//approach https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_state_if_id

function selectColor(clicked) {
    var id = clicked.id;
    if (id === "color1") {
        // border shadows
        document.getElementById("color1").style.borderColor = "#809BC6";
        document.getElementById("color2").style.borderColor = "#FFFFFF";
        document.getElementById("color3").style.borderColor = "#FFFFFF";
        document.getElementById("color4").style.borderColor = "#FFFFFF";
        //text
        document.getElementById("currentcolor").textContent = "Current selection: Morning Haze";
        //main =
        document.getElementById("productmain").src = "productmain.png";
        //thumb 
        document.getElementById("thumb1").src = "thumb1.png";
        document.getElementById("thumb2").src = "thumb2.png";
        document.getElementById("thumb3").src = "thumb3.png";  
    } else if (id === "color2") {
      // border shadows
      document.getElementById("color1").style.borderColor = "white";
      document.getElementById("color2").style.borderColor = "#809BC6";
      document.getElementById("color3").style.borderColor = "#FFFFFF";
      document.getElementById("color4").style.borderColor = "#FFFFFF";
      // text
      document.getElementById("currentcolor").textContent = "Current selection: After School Special";
      //main
      document.getElementById("productmain").src = "main_school.png";
      //thumbs
      document.getElementById("thumb1").src = "thumb1_school.png";
      document.getElementById("thumb2").src = "thumb2_school.png";
      document.getElementById("thumb3").src = "thumb3_school.png";
      //change id "thumb1" to src "thumb1_school.png"
      //change id "thumb2" to src "thumb2_school.png"
      //change id "thumb3" to src "thumb3_school.png"
    } else if (id === "color3") {
      // border shadows
      document.getElementById("color1").style.borderColor = "white";
      document.getElementById("color2").style.borderColor = "white";
      document.getElementById("color3").style.borderColor = "#809BC6";
      document.getElementById("color4").style.borderColor = "#FFFFFF";
      //text
      document.getElementById("currentcolor").textContent = "Current selection: Cozy Denim";
      //main
      document.getElementById("productmain").src = "main_denim.png";
      //thumbs
      document.getElementById("thumb1").src = "thumb1_denim.png";
      document.getElementById("thumb2").src = "thumb2_denim.png";
      document.getElementById("thumb3").src = "color3.png";
    } else {
      //color 4
      // border shadows
      document.getElementById("color1").style.borderColor = "white";
      document.getElementById("color2").style.borderColor = "white";
      document.getElementById("color3").style.borderColor = "white";
      document.getElementById("color4").style.borderColor = "#809BC6";
      // text
      document.getElementById("currentcolor").textContent = "Current selection: Rainy Day";
      //main
      document.getElementById("productmain").src = "main_rainy.png";
      //thumbs
      document.getElementById("thumb1").src = "thumb1_rainy.png";
      document.getElementById("thumb2").src = "thumb2_rainy.png";
      document.getElementById("thumb3").src = "thumb3_rainy.png";
    }
}


function selectFill(clicked) {
    var id = clicked.id;
    if (id === "fill1") {
        document.getElementById("currentfill").textContent = "Current selection: Poly fill";
        document.getElementById("fill1").style.borderColor = "#809BC6";
        document.getElementById("fill2").style.borderColor = "white";
        document.getElementById("fill3").style.borderColor = "white";
      } else if (id === "fill2") {
        document.getElementById("currentfill").textContent = "Current selection: Down fill";
        document.getElementById("fill1").style.borderColor = "white";
        document.getElementById("fill2").style.borderColor = "#809BC6";
        document.getElementById("fill3").style.borderColor = "white";
      } else {
        document.getElementById("currentfill").textContent = "Current selection: Foam fill";
        document.getElementById("fill1").style.borderColor = "white";
        document.getElementById("fill2").style.borderColor = "white";
        document.getElementById("fill3").style.borderColor = "#809BC6";
      }

}


