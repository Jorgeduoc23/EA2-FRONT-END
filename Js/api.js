// console.log("Estoy probando js de la api");
//se crea la funcion primaria de js
//https://www.themealdb.com/api/json/v1/1/categories.php
$(document).ready(function () {


     //jqclick (aca se crea que es lo que sucede en el evento click)
     $("#enviar").click(function(){

        $.get("https://www.themealdb.com/api/json/v1/1/categories.php",
        function(data){
            $.each(data.categories, function(i, item){
                console.log(data.categories);
                $("#categorias").append(
                    "<tr><td>"+item.idCategory+"</td><td>"+item.strCategory+
                    "</td><td><img src='"+item.strCategoryThumb+"'>"+
                    "</td><td>"+item.strCategoryDescription+"</td></tr>");
                });
        })
         
    });
});

   
















    
