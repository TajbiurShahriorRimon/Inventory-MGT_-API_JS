function delCategory1(catId){
   $.ajax({
       url: "http://localhost:65381/api/categories/"+catId,
       method: "DELETE",
       headers: "Content-type:application/json",
       data: {
           "categoryId": catId
       },
       complete: function (xmlHttp, status){
           if(xmlHttp.status == 204){
               alert("DELETED");
               //the following line defines that when a category will be deleted then index.html file will redirected
               //and the there will be no previous page if we want to get back to the previous page(which shows the previous state)
               //therefore previous state will not be there anymore
               window.location.replace("index.html");
           }
           else {
               alert(xmlHttp.status + ": " + xmlHttp.statusText + "\nFailed To DELETE");
           }
       }
   })
    /*alert(catId);*/
}