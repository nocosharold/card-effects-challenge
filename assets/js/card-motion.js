var $card = $(".card");
var lastCard = $(".card-list .card").length - 1;

$(".next").click(function () {
    var prependList = function () {
        if ($(".card").hasClass("activeNow")) {
            var $slicedCard = $(".card").slice(lastCard).removeClass("transformThis activeNow");
            $("ul").prepend($slicedCard);
        }
    };
    $("li").last().removeClass("transformPrev").addClass("transformThis hide").prev().addClass("activeNow");
    setTimeout(function () {
        prependList();
    }, 150);
});

$(".prev").click(function () {
    var appendToList = function () {
        if ($(".card").hasClass("activeNow")) {
            var $slicedCard = $(".card").slice(0, 1).addClass("transformPrev").removeClass('hide');
            $(".card-list").append($slicedCard);
        }
    };

    $("li").removeClass("transformPrev").last().addClass("hide activeNow").prevAll().removeClass("activeNow");
    setTimeout(function () {
        appendToList();
    }, 150);
});
