function fun1() //display selected furniture kategory
{
    var xx = document.getElementById('select1').value;
    fun2();
    if (xx == 1) {
        document.getElementById('seating').style.display = "block";
    }
    else if (xx == 2) {
        document.getElementById('table').style.display = "block";
    }
    else if (xx == 3) {
        document.getElementById('bedframe').style.display = "block";
    }
    else if (xx == 4) {
        document.getElementById('pot').style.display = "block";
    }
    else {
    }
}

function fun2()//hide unselected furniture category
{
    document.getElementById('seating').style.display = "none";
    document.getElementById('table').style.display = "none";
    document.getElementById('bedframe').style.display = "none";
    document.getElementById('pot').style.display = "none";
}
function hideTable() {
    var x = document.getElementById("tableOutput");
    x.style.display = "none";
}



function output() {
    let choice = confirm('Confirm to order?');
    if (choice == true) {

        var name = document.getElementById('name').value;
        var phone = document.getElementById('phoneNo').value;
        var address = document.getElementById('address').value;

        var product1 = document.getElementById("ck1");
        var product2 = document.getElementById("ck2");
        var product3 = document.getElementById("ck3");
        var product4 = document.getElementById("ck4");
        var product5 = document.getElementById("ck5");
        var product6 = document.getElementById("ck6");
        var product7 = document.getElementById("ck7");
        var product8 = document.getElementById("ck8");
        var product9 = document.getElementById("ck9");
        var product10 = document.getElementById("ck10");
        var product11 = document.getElementById("ck11");
        var product12 = document.getElementById("ck12");


        var quantity1 = document.getElementById("quantity1");
        var quantity2 = document.getElementById("quantity2");
        var quantity3 = document.getElementById("quantity3");

        var quantity4 = document.getElementById("quantity4");
        var quantity5 = document.getElementById("quantity5");
        var quantity6 = document.getElementById("quantity6");

        var quantity7 = document.getElementById("quantity7");
        var quantity8 = document.getElementById("quantity8");
        var quantity9 = document.getElementById("quantity9");

        var quantity10 = document.getElementById("quantity10");
        var quantity11 = document.getElementById("quantity11");
        var quantity12 = document.getElementById("quantity12");


        var price1 = 0;
        var price2 = 0;
        var price3 = 0;
        var grandTotal = 0;

        checked = $("input[type=checkbox]:checked").length;
        
        var txt1 = "", txt2 = "", txt3 = "";

        var x = document.getElementById("tableOutput");
        var y = document.getElementById("orderProduct");

            if (product1.checked == true) {
                price1 = 300 * parseInt(quantity1.value);
                txt1 = "Three Seater Sofa by Bautier";

                if (quantity1.value == "") {
                    alert("You must order at least one item");
                    return false;
                }
            }
            if (product2.checked == true) {
                price2 = 100 * parseInt(quantity2.value);
                txt2 = "Reva Twish by Pedrali";

                if (quantity2.value == "") {
                    alert("You must order at least one item");
                    return false;
                }
            }
            if (product3.checked == true) {
                price3 = 500 * parseInt(quantity3.value);
                txt3 = "Nak 3-seater sofa by Bivaq";

                if (quantity3.value == "") {
                    alert("You must order at least one item");
                    return false;
                }
               
            }
            if (product4.checked == true) {
                price1 = 200 * parseInt(quantity4.value);
                txt1 = "Xaver Coffee Table by Belfakto";

                if (quantity4.value == "") {
                    alert("You must order at least one item");
                    return false;
                }
            }
            if (product5.checked == true) {
                price2 = 200 * parseInt(quantity5.value);
                txt2 = "Shangai Ceramic Top Table by Riflessi";

                if (quantity5.value == "") {
                    alert("You must order at least one item");
                    return false;
                }
            }
            if (product6.checked == true) {
                price3 = 150 * parseInt(quantity6.value);
                txt3 = "Bolt by Phoenix";

                if (quantity6.value == "") {
                    alert("You must order at least one item");
                    return false;
                }
            }
            if (product7.checked == true) {
                price1 = 200 * parseInt(quantity7.value);
                txt1 = "Nyan by Porada";

                if (quantity7.value == "") {
                    alert("You must order at least one item");
                    return false;
                }
            }
            if (product8.checked == true) {
                price2 = 400 * parseInt(quantity8.value);
                txt2 = "Headboard Bruxelles by Treca Paris";

                if (quantity8.value == "") {
                    alert("You must order at least one item");
                    return false;
                }
            }
            if (product9.checked == true) {
                price3 = 300 * parseInt(quantity9.value);
                txt3 = "Suzie Wong Bed by Poltrona Frau";

                if (quantity9.value == "") {
                    alert("You must order at least one item");
                    return false;
                }
            }
            if (product10.checked == true) {
                price1 = 50 * parseInt(quantity10.value);
                txt1 = "Soma XL Mixed Materials by Indigenus";

                if (quantity10.value == "") {
                    alert("You must order at least one item");
                    return false;
                }
            }
            if (product11.checked == true) {
                price2 = 45 *parseInt(quantity11.value);
                txt2 = "Council by Bloss";

                if (quantity11.value == "") {
                    alert("You must order at least one item");
                    return false;
                }
            }
            if (product12.checked == true) {
                price3 = 60 * parseInt(quantity12.value);
                txt3 = "Bhaca Small by Indigenus";

                if (quantity12.value == "") {
                    alert("You must order at least one item");
                    return false;
                }
            }
            if(!checked) {
                alert("No order made");
                return false;
              }

            grandTotal = price1 + price2 + price3;
    
        
            

        document.getElementById("nameDisplay").innerHTML = name;
        document.getElementById("phoneDisplay").innerHTML = phone;
        document.getElementById("addressDisplay").innerHTML = address;


        document.getElementById("product1Display").innerHTML = txt1;
        document.getElementById("product2Display").innerHTML = txt2;
        document.getElementById("product3Display").innerHTML = txt3;


        document.getElementById("price1Display").innerHTML = price1;
        document.getElementById("price2Display").innerHTML = price2;
        document.getElementById("price3Display").innerHTML = price3;
        document.getElementById("grandTotal").innerText = grandTotal;
        

        x.style.display = "table";
        y.style.display = "none";
        return false;
    }
    else {

    }
}

