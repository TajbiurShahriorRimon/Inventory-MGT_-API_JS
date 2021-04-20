$(document).ready(function () {
    //"productEditView.html?productId="+prod_id+"&categoryName="+cat_name+"&productName="+prod_name+"&productPrice="+prod_price;
    alert(window.location);
    //the following variable will be assigned the whole url string
    var urlString = window.location;

    //creating a url type object. this object will help us get the data from the url string that we have passed in the url
    var url = new URL(urlString);
    var category_name = url.searchParams.get('categoryName');//get the categoryName value from the query string
    var product_name = url.searchParams.get('productName');//get the productName value from the query string
    var product_id = url.searchParams.get('productId');//get the productId value from the query string
    var product_price = url.searchParams.get('productPrice');//get the productPrice value from the query string
    var category_id = url.searchParams.get('categoryId');//get the categoryId value from the query string

    alert("catName: "+category_name+"\nproductId: "+product_id+"\nproductName: "+product_name+"\nprice: "+product_price);

    $("#prodNameForUpdate").html("<input type='text' id='updateProductName' value='"+product_name+"'>");
    $("#prodPriceForUpdate").html("<input type='text' id='updateProductPrice' value='"+product_price+"'>");

    $.ajax({
        url: "http://localhost:65381/api/categories",
        complete: function (xmlHttp, status) {
            if(xmlHttp.status == 200){
                var str = '';//empty variable
                var data = xmlHttp.responseJSON;
                alert(xmlHttp.status + ": " + xmlHttp.statusText);
                for (var i = 0; i < data.length; i++){
                    if(data[i].CategoryId == category_id){
                        str+= "<option id='"+data[i].CategoryId+"' selected value='"+data[i].CategoryId+"'>"+data[i].CategoryName+"</option>";
                    }
                    else {
                        str+= "<option value='"+data[i].CategoryId+"'>"+data[i].CategoryName+"</option>";
                    }
                }

                $("#categoryListForUpdate").html(str);
                $("#productUpdateBtn").html("<button onclick='updateProduct("+product_id+")'>Edit</button>");
            }
            else {
                alert(xmlHttp.status + ": " + xmlHttp.statusText);
            }
        }
    })

})

function updateProduct(prod_id){
    alert("hello");
    var product_name = document.getElementById("prodNameForUpdate").value;
    var price = document.getElementById("prodPriceForUpdate").value;
    var category_name = document.getElementById("categoryListForUpdate").value;
    alert("vlkdv");
    var cat_id = document.getElementById("categoryListForUpdate");
    var category_Id = cat_id.value;
    alert("ProductId: "+prod_id+ "\nCategory Id: "+category_Id+ "\nPrice: "+price+ "\nproductName: "+product_name);

    $.ajax({
        url: "http://localhost:65381/api/product/"+prod_id,
        method: "PUT",
        data: {
            "productName": $("#updateProductName").val(), //get data which is in the text field
            "price": $("#updateProductPrice").val(), //get data which is in the text field
            "categoryId": category_Id //get data which is in the text field
        },
        complete: function (xmlHttp, status) {
            //alert("here it is");
            if(xmlHttp.status == 200){
                alert(xmlHttp.status + ": " + xmlHttp.statusText + "\nSuccessfully Updated");
                window.location.replace("../Product/productListView.html");
            }
            else {
                alert(xmlHttp.status + ": " + xmlHttp.statusText + "\nFailed To Update");
            }
        }
    })
}