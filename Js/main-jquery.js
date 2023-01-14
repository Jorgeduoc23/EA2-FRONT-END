// Cambiar contenido de Etiqueta h1


    // Con JavaScript Puro
    //console.log("Pagina Funcionando")
    //cambiar a mayusculas el titulo
    //document.getElementById('titulo').innerHTML = "TITULO DE PAGINA";
   

    // Incorporar Libreria JQuery

$(document).ready(function(){
    console.log("Pagina Funcionando")
    
    
    
    // SELECCIONAR ELEMENTOS HTML
    $("h1").html("Texto modificado por su etiqueta");
    $("#titulo").html("texto modificado por su ID");
    $(".display-3").html("texto modificado por su clase");
        
    
    // AGREGAR CLASE  [ jq.classAdd ]
    $("h1").addClass("text-center text-uppercase");
    //$("#p1").addClass("text-danger");
    
    // QUITAR CLASE  [ jq.classRemove ]
    $("#parrafos").removeClass("display-5");

    // AGREGAR ELEMENTO [ jq.Append ]
    $("#parrafos").append("<p>cuarto parrafo agregado desde jquery</p>");
      
        
    // QUITAR ELEMENTO [ jq.Remove ]
    // $("#p3").remove();  
    
    
    // MODIFICAR PROPIEDADES CSS [ jqCssSet ]    
    $('#p1').css('color', 'blue');
    $('#p3').css({color:'yellow', background:'blue', padding:'50px'});
    
    // METODO attr()      [ jqAttrSet]
    $('img').attr('src','https://raulperez.tieneblog.net/wp-content/uploads/2015/09/tux.jpg');
    $('#parrafos').append('<img src="" alt="">');
    
      
    
    // EVENTOS CON JQUERY

    
    
    //Evento click Agregando clase
    
    
    //Evento click Agregando estilo en css
    
    
    
    //Alternativa al evento click

})
