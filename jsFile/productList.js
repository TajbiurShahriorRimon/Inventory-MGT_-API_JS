//var category_Name_By_Id = ''; //global variable
$(document).ready(function () {
    //document.write("here");
    //alert("klfdsm");
    $.ajax({
        url: "http://localhost:65381/api/products",
        //method: "GET",
        complete: function (xmlHttp, status){
            if(xmlHttp.status == 200){
                var str1='';
                var category_Id = '';
                var data = xmlHttp.responseJSON;
                //alert("Product List");
                var cat_Name = [];
                var category_name_data = [];
                for (var i = 0; i < data.length; i++){
                    //alert(category_Name_By_Id);//if this alert is removed then the category name will not be shown in the table...

                    //calling a function which is inside this function. this function is to get the category information by the id
                    call_ajax();
                    function call_ajax(){
                        //alert("hola: "+ data[i].CategoryId);
                        var d1 = data[i].CategoryId;
                        //alert(d1);
                        $.ajax({
                            url: "http://localhost:65381/api/categories/" + d1,
                            method: "GET",
                            data: {
                                "categoryId": d1
                            },
                            async: false, //async is false. it will now work in a synchronous way
                            complete: function (xmlHttp, status) {
                                if (xmlHttp.status == 200) {
                                    //alert("hola");
                                    var str = '';
                                    var data1 = xmlHttp.responseJSON;
                                    //category_Name_By_Id = data1.CategoryName;
                                    cat_Name[i] = data1.CategoryName;
                                    //alert("category Name: "+data1.CategoryName);
                                } else {
                                    alert("Not found");
                                }
                            }
                        })
                    }
                    //the category information is needed from the function but ajax does not return value from function.
                    //to get value from ajax through function the following line needs to be implemented. So when the above function's
                    //work is done, the following line will be implemented
                    $.when(call_ajax()).done(function () {
                        var category_Name = cat_Name[i];
                        category_name_data[i] = category_Name;
                        //alert(category_name_data[i]);
                        str1+= "<tr>" +
                            "<td>"+data[i].ProductName+"</td>" +
                            "<td>"+data[i].Price+"</td>" +
                            "<td>"+cat_Name[i]+"</td>" +
/*
                            "<td> <button onclick='helloFunc("+data[i].ProductId+", '"+category_name_data[i]+"')'>Update</button> </td>"+
*/
                            "<td> <button onclick='editSingleProduct("+data[i].ProductId+", \""+category_name_data[i]+"\", \""+data[i].ProductName+"\", "+data[i].Price+", "+data[i].CategoryId+")'>Update</button> </td>"+
                            "</tr>";
                    })
                    //cat_Name[i] = category_Name_By_Id;
                    //alert("cat_name: " +cat_Name[i]);
                    /*str1+= "<tr>" +
                        "<td>"+data[i].ProductName+"</td>" +
                        "<td>"+data[i].Price+"</td>" +
                        "<td>"+data[i]+"</td>" +
                        "<td> <button onclick='helloFunc("+data[i].ProductId+", "+cat_Name[i]+")'>Edit</button> </td>"+
                        "</tr>";*/

                    //category_Name_By_Id = category_Name_By_Id;
                }
                $("tbody").html(str1);
            }
            else {
                alert("No products");
            }
        }
    })
});

function editSingleProduct(prod_id, cat_name, prod_name, prod_price, cat_id){
    alert("CAT ID: "+prod_id+ "\n"+cat_name+ "\nprice: "+prod_price+ "\nprod_name: " +prod_name+ "\ncat_id: "+cat_id);

    updateSingleProduct(prod_id, cat_name, prod_name, prod_price, cat_id);
}