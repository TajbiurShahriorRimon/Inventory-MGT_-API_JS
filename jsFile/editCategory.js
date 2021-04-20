$(document).ready(function (){
    /*var str = location.search.sub(1);
    alert(str);*/

    var category_Name = sessionStorage.getItem("catName");
    var category_id = sessionStorage.getItem("categoryId");
    alert(category_Name + "\n" +category_id);
    $("#sample").html("<input type='text' value='"+category_Name+"' id='updatedCategoryText'/>" +
        "<input type='text' id='categoryNumber' value='"+category_id+"' hidden>");
    $("#updateBtn").html("<button id='btnUpdateCategory' onclick='manageEditedCategory()'>Update</button>");
    /*$("#sample").html("<input type='text' value='"+category_Name+"'/>");*/
})

function manageEditedCategory(){
    var cName = document.getElementById("updatedCategoryText").value;
    var category_id = sessionStorage.getItem("categoryId");
    alert(cName);
    updateCategory(cName, category_id);
}