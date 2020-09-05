var isHidden = true;
var order;

// Mobile menu puller 
$(".menu-dropdown").click(function () {
    if (isHidden) {
        $(".nav").css("top", "0");
        $(".menu-dropdown").attr("class", "fas fa-times menu-dropdown");
        isHidden = false;
    } else {
        $(".nav").css("top", "-70vh");
        $(".menu-dropdown").attr("class", "fas fa-bars menu-dropdown");
        isHidden = true;
    }
})


// Brand product showing
$(".logo-item").hover(function () {
    order = this.getAttribute("class");
    order = order.charAt(13);
    $(".pi-" + order).addClass("position-0");

}, function () {
    order = this.getAttribute("class");
    order = order.charAt(13);
    $(".pi-" + order).removeClass("position-0");
   
})



// CURSOR
var cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", function(e){

   cursor.style.top = e.pageY + "px";
   cursor.style.left = e.pageX + "px";

})