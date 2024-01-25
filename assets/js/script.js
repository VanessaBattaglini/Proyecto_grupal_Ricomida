// TOOLTIP
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

// DOBLECLICK
$(document).ready(function () {
    $("h3").dblclick(function () {
        $(this).css("color", "red");
    });
});
// TEXTO OCULTO

$('.card').click(function () {
    $(this).toggleClass('active');
    $('.card-text').css("visibility", "hidden");
    $('.card').css('height', '18rem');
    $('.card').css('border', 'solid');
});
