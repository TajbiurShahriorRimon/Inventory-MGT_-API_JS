//the following line defines that after the completing the load of index.html file the following line will be executed
$(document).ready(function (){
    //document.write("It works");
    $.ajax({
        //url is a property which defines that to which domain will be requested
        url: "http://localhost:65381/api/categories",
        //the following line defines that if the request is complete then the following function will be invoked
        complete: function(xmlHttp, status){
            //document.write(status);
            //document.write(xmlHttp.responseText);
            //console.log(xmlHttp);

            if(xmlHttp.status == 200){
                var str = '';//empty variable
                var data = xmlHttp.responseJSON;//parsing the JSON format

                for(var i = 0; i < data.length; i++){

                    str+="<tr><td>"+data[i].CategoryId+"</td><td>"+data[i].CategoryName+"</td><td><button onclick='delCategory("+data[i].CategoryId+")' id='"+data[i].CategoryId+"'>" +
                        "Delete</button>" +
                        //following line is for the purpose of updating the category. When the button is clicked the function
                        //is invoked with an argument of CategoryId
                        "<button id='"+data[i].CategoryName+"' onclick='categoryEdit("+data[i].CategoryId+")'>Update</button>"+
                        "<button id='something' onclick='a()'>Some</button>" +
                    "</td></tr>";
                }
                $("tbody").html(str);
                //$("rowCategoryData").html(str);
            }
        }
    })
});

function delCategory(catId){
    alert(catId);
    delCategory1(catId);
}

//from this method another method to get the category information by the help if ID is invoked which is in the updateCategory.js file
function categoryEdit(cId){
    alert("hello");
    //alert(cId);
    getCategoryById(cId);
}

function a(){
    alert("kckvs");
}