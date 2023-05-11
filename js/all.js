// $("#HeaderBtnBars").click(function () {
//     // alert(123)
//     $("#HeaderBody").fadeIn();  
//     $("body").css("overflow", "hidden")
// })

// $("#HeaderBtnXmark").click(function () {
//     $("#HeaderBody").fadeOut();  
//     $("body").css("overflow", "visible")
// })

const $HeaderBtnBars = $("#HeaderBtnBars")
const $HeaderBtnXmark = $("#HeaderBtnXmark")
const $HeaderBody = $("#HeaderBody")
const $body = $("body")

$HeaderBtnBars.click(function () {
    // alert(123)
    $HeaderBody.fadeIn();  
    $body.css("overflow", "hidden")
})

$HeaderBtnXmark.click(function () {
    $HeaderBody.fadeOut();  
    $body.css("overflow", "visible")
})

