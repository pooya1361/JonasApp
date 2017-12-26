$(document).ready(function () {
    console.log("Ready!");

    $("#menuOpenButton").click(function () {
        if ($(".menu").css("right") === "-3px") {
            $(".menu").css("right", "-271px")
        } else {
            $(".menu").css("right", "-3px")
        }
        $("#menu").toggle("background-color", "whitesmoke");
    });

    $.ajax({
        url: "https://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/17/lat/59/data.json",
        success: function (data) {
            var params = data.timeSeries[0].parameters.find(x => x.name === "t");
            $("#tempNow").text(params.values[0]);
        }
    })

    $(".menuButton .icon").click(function (event) {
        var id = event.target.id === "" ? event.target.parentElement.id : event.target.id;
        var pageId;
        switch (id) {
            case "weather":
                pageId = 0
                break;

            case "food":
                pageId = 1
                break;

            case "calendar":
                pageId = 2
                break;

            default:
                break;
        }

        var anime = $(".slider");
        var button = $("#menuOpenButton");
        anime.css("left", $(window).width() * pageId * -1);
        //$(".container").css("background-image", "url(" + bkgrndImages[pageId] + ")")
        anime.promise().done(() => setTimeout(() => button.click(), 1000))
    })

    $('#calendar').fullCalendar({
        aspectRatio: 2
    })
});
