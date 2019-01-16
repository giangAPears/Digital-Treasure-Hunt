$(".instant-treasure").dblclick(function(){
    $(".one").hide();
    $(".treasure").fadeIn();
});

$(".ml").click(function(){
    $(".one").hide();
    $(".spilled").show();
    $("body").css("background", "#202020");
    $("body").css("color", "#ffe6ff");
    $(".instant-treasure").css("color", "#202020");
    $(".instant-treasure").css("background-color", "#202020");
    $(".instant-treasure").css("border", "#202020");
});

$("#towel").click(function(){
    $(".whoops1").hide();
    $(".whoops").attr("src", "https://cdn.dribbble.com/users/736061/screenshots/2736042/towel_day.gif");
    $("#darn").text("Click the towel to clean the spill"); 
    $("#towel").hide();
    $("body").css("background", "#484848");
    $("body").css("color", "#ffccff");
    $(".instant-treasure").css("color", "#484848");
    $(".instant-treasure").css("background-color", "#484848");
    $(".instant-treasure").css("border", "#484848");
});

$(".whoops").click(function(){
    $(".spilled").hide();
    $(".clean").show();
    $("body").css("background", "#696969");
    $("body").css("color", "#ffb3ff");
    $(".instant-treasure").css("color", "#696969");
    $(".instant-treasure").css("background-color", "#696969");
    $(".instant-treasure").css("border", "#696969");
});

$("#clean").click(function(){
    $(".clean").hide();
    $(".pour").show();
    $("body").css("background", "#909090");
    $(".instant-treasure").css("color", "#909090");
    $(".instant-treasure").css("background-color", "#909090");
    $(".instant-treasure").css("border", "#909090");
});

$("#drink").click(function(){
    $(".pour").hide();
    $(".drink").show();
    $("body").css("background", "#B0B0B0");
    $("body").css("color", "#BA55D3	");
    $(".instant-treasure").css("color", "#B0B0B0");
    $(".instant-treasure").css("background-color", "#B0B0B0");
    $(".instant-treasure").css("border", "#B0B0B0");
});

$(".drink").dblclick(function(){
    $(".drink").hide();
    $(".fly").show();
    $("body").css("background", "#D0D0D0");
    $("body").css("color", "#ff1aff");
    $(".instant-treasure").css("color", "#D0D0D0");
    $(".instant-treasure").css("background-color", "#D0D0D0");
    $(".instant-treasure").css("border", "#D0D0D0");
});

$("#fly").click(function(){
    $(".fly").hide();
    $(".cat").show();
    $("body").css("background", "#E8E8E8");
    $("body").css("color", "#e600e6");
    $(".instant-treasure").css("color", "#E8E8E8");
    $(".instant-treasure").css("background-color", "#E8E8E8");
    $(".instant-treasure").css("border", "#E8E8E8");
});

$(".cat").mouseenter(function(){
    $(".cat").hide();
    $(".treasure").fadeIn();
    $("body").css("background", "white");
    $("body").css("color", "#b300b3");
    $(".instant-treasure").css("color", "white");
    $(".instant-treasure").css("background-color", "white");
    $(".instant-treasure").css("border", "white");
});





