//this method is invoked from editCategory.js file function
function updateCategory(catName, catId){
    $.ajax({
        url: "http://localhost:65381/api/categories/"+catId,
        method: "PUT",
        data: {
            "categoryName": catName
        },
        complete: function (xmlHttp, status) {
            //alert("here it is");
            if(xmlHttp.status == 200){
                alert(xmlHttp.status + ": " + xmlHttp.statusText + "\nSuccessfully Updated");
                window.location.replace("../../index.html");
            }
            else {
                alert(xmlHttp.status + ": " + xmlHttp.statusText + "\nFailed To Update");
            }
        }
    })
}

//get the specific category. Invoked from scriptHome.js file
function getCategoryById(catId){
    alert("csiofj");
    $.ajax({
        url: "http://localhost:65381/api/categories/"+catId,
        method: "GET",
        data: {
            "categoryId": catId
        },
        complete: function (xmlHttp, status) {
            if(xmlHttp.status == 200){
                var str = '';
                var data = xmlHttp.responseJSON;
                str+= data.CategoryName;
                var category_Id = data.CategoryId;
                alert(str);

                //$("#sample").html(str);
                //window.location.href = "Views/Category/update.html?categoryName="+str;
                /*alert("hi");
                $("div").html(str);*/

                //the following line defines that the value is stored in the local and works like session
                sessionStorage.setItem("catName", str);
                sessionStorage.setItem("categoryId", category_Id);
                alert("categoryId: "+category_Id+"\nCategoryName: "+str);
                window.location.href = "Views/Category/update.html";
            }
            else {
                alert("No Category Found!!");
            }
        }
    })
}