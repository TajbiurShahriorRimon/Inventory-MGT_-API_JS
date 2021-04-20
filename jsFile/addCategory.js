$(document).ready(function() {
    $("#addCategory").click(function () {
        alert("daesd");
        $.ajax({
            url: "http://localhost:65381/api/categories",
            method: "POST",
            //header describes which type of data we are sending
            headers: "Content-Type:application/json",
            //data attribute defines which data will be passed
            data: {
                //So here category name will be sent
                "categoryName": $("#categoryName").val()
            },
            complete: function (xmlHttp, status) {
                alert("nkj");
                alert($("#categoryName").val());
                if (xmlHttp.status == 201) {
                    alert($("#categoryName").val());
                    alert(xmlHttp.status + ": " + xmlHttp.statusText + "\nCategory Created");
                } else {
                    alert($("#categoryName").val());
                    alert(xmlHttp.status + ": " + xmlHttp.statusText + "\nFailed To Create");
                }
            }
        })
    })
});