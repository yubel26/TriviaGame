$(document).ready(function () {
    var correct = []

    $("#1a").on("click", function () {
        correct.push("1a")
        console.log(correct)
    })
    $("#2a").on("click", function () {
        correct.push("2a")
        console.log(correct)
    })
    $("#3a").on("click", function () {
        correct.push("3a")
        console.log(correct)
    })
    $("#4a").on("click", function () {
        correct.push("4a")
        console.log(correct)
    })
    $("#5a").on("click", function () {
        correct.push("5a")
        console.log(correct)
    })
    $("#6a").on("click", function () {
        correct.push("6a")
        console.log(correct)
    })
    $("#7a").on("click", function () {
        correct.push("7a")
        console.log(correct)
    })
    $("#8a").on("click", function () {
        correct.push("8a")
        console.log(correct)
    })
    $("#9a").on("click", function () {
        correct.push("9a")
        console.log(correct)
    })
    $("#10a").on("click", function () {
        correct.push("10a")
        console.log(correct)
    })
    // $("#11a").on("click", function () {
    //     correct.push("11a")
    //     console.log(correct)
    // })

    function myFunction() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }

    function score() {
        alert(
            "Your score is " + correct.lenght + "/ 10"
        )
    }


    $('#sumbit').on("click", score()

    );








})