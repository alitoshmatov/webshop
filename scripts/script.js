var isHidden = true;
var position = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
}

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

$(".logo-item").hover(function () {

    var order = this.getAttribute("class");
    order = order.charAt(13);

    position.left = $(".pi-"+order).css("left");
    position.right = $(".pi-"+order).css("right");
    position.top = $(".pi-"+order).css("top");
    position.bottom = $(".pi-"+order).css("bottom");

    $(".pi-"+order).css("left", "0");
    $(".pi-"+order).css("right", "0");
    $(".pi-"+order).css("top", "0");
    $(".pi-"+order).css("bottom", "0");

}, function () {
    var order = this.getAttribute("class");
    order = order.charAt(13);
    $(".pi-"+order).css("left", position.left);
    $(".pi-"+order).css("right", position.right);
    $(".pi-"+order).css("top", position.top);
    $(".pi-"+order).css("bottom", position.bottom);

})


// const elem = $("pi-1");
// $("pi-1").css("position", "static");