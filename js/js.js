$(document).ready(function () {
    getQuote();
    //button animation
    $(".buttons").hover(function () {
        $(this).css("background-color", "rgba(0, 0, 0, 1)");
    }, function () {
        $(this).css("background-color", "rgba(0, 0, 0, 0.7)");
    });
    /* content animation - discontinued
    $("#inspiringQuote, #title").hover(function () {
        $(this).css("background-color", "rgba(0, 0, 0, 0.75)");
    }, function () {
        $(this).css("background-color", "rgba(0, 0, 0, 0.7)");
    }); */
});
//Generate quote
var currentQuote = "";
var currentAuthor = "";

function getQuote() {
    var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url, function (val) {
        $("#quote").html('"' + (val.quoteText).trim() + '"');
        currentQuote = (val.quoteText);
        if (val.quoteAuthor !== "") {
            $("#author").html('-' + val.quoteAuthor);
            currentAuthor = ('-' + val.quoteAuthor);
        }
        else {
            $("#author").html("-Unknown");
            currentAuthor = ("-Unknown");
        }
        //tweet this
        $("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(currentQuote + " " + currentAuthor));
    });
}
//New quote
$("#newQuote").on("click", function () {
    getQuote();
});