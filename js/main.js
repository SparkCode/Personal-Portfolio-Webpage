$(document).ready(function () {
    $(window).resize(function () {
        if ($(this).width() < 768) {
            $('#custom-navbar').prependTo($("body"));
        }
        else
            $('.jumbotron').prependTo($("body"));
    })
})