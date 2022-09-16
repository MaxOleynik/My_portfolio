$(document).ready(function(){
    $('.portfolio__carousel').slick({
        centerMode: true,
        variableWidth: true,
        slidesToShow: 1, 
        arrows: true, 
        dots: true
    });
    // Устанавливаем для отображения div значение none
    $("#HTML-btn").click(function(){
        $("#HTML").css("display", "none");
    });
    
    // Устанавливаем для отображения div значение block
    $("#HTML-btn").click(function(){
        $("#HTML-active").css("display", "flex");
    });

    // Устанавливаем для отображения div значение none
    $("#HTML-active-btn").click(function(){
        $("#HTML-active").css("display", "none");
    });
    
    // Устанавливаем для отображения div значение block
    $("#HTML-active-btn").click(function(){
        $("#HTML").css("display", "flex");
    });

    // Устанавливаем для отображения div значение none
    $("#CSS-btn").click(function(){
        $("#CSS").css("display", "none");
    });
    
    // Устанавливаем для отображения div значение block
    $("#CSS-btn").click(function(){
        $("#CSS-active").css("display", "flex");
    });

    // Устанавливаем для отображения div значение none
    $("#CSS-active-btn").click(function(){
        $("#CSS-active").css("display", "none");
    });
    
    // Устанавливаем для отображения div значение block
    $("#CSS-active-btn").click(function(){
        $("#CSS").css("display", "flex");
    });

    // Устанавливаем для отображения div значение none
    $("#JavaScript-btn").click(function(){
        $("#JavaScript").css("display", "none");
    });
    
    // Устанавливаем для отображения div значение block
    $("#JavaScript-btn").click(function(){
        $("#JavaScript-active").css("display", "flex");
    });

    // Устанавливаем для отображения div значение none
    $("#JavaScript-active-btn").click(function(){
        $("#JavaScript-active").css("display", "none");
    });
    
    // Устанавливаем для отображения div значение block
    $("#JavaScript-active-btn").click(function(){
        $("#JavaScript").css("display", "flex");
    });
  });
      