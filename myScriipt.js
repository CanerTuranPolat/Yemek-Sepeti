var myNavbar = document.getElementById("myNav");

var adressPlaceholder = document.getElementById("adress-placeholder");

console.log(adressPlaceholder);

function myFunc(){
    if(window.scrollY >=60){
        console.log("Scroll " + window.scrollY);
        myNavbar    .style.boxShadow="0px 3px 5px 0px #ced4da";
    }else{
        console.log("Scroll " + window.scrollY);
        myNavbar.style.boxShadow="none";
    }
}




$("document").ready(function(){

    $("#adress-input").focus(function(){
        $("#adress-placeholder").animate({
            top:"-5px",
            left:"15px",
            fontSize:"11px",

        },100)
    });

    $("#adress-input").blur(function(){
        $("#adress-placeholder").animate({
            top:"20px",
            left: "20px",
            fontSize:"14px"
        },100)
    })
    
})


$(".city-box").mouseenter(function(){
    console.log("Caner");
    $(this).find(".city-btn").animate({opacity:'1'},300);
});

$(".city-box").mouseleave(function(){
    console.log("Caner");
    $(this).find(".city-btn").animate({opacity:'0'},300);
});




















































