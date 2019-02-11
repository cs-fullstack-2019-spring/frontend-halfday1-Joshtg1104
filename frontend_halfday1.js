//variables to help with counting clicks
var x = 1;
var y = 1;

//click counter function for player 1
$("#p1").click(function () {
    $("#score1").text(x);
        console.log("click");
        x += 1;
        updateLeader(1);
        winner();
});
//click counter function for player 1
$("#p2").click(function () {
    $("#score2").text(y);
        console.log("click");
        y += 1;
        updateLeader(1);
        winner();
});
//function that keeps up with leader status
function updateLeader(a) {
    var p1score= parseInt($("#score1").text());
    console.log(p1score);
    var p2score = parseInt($("#score2").text());
    console.log(p2score);
    if(p1score > p2score){
        $("#leader").text("PLAYER 1");
    }
    else if(p2score > p1score){
        $("#leader").text("PLAYER 2");
    }
    else if(p1score === p2score){
        $("#leader").text("TIE")
    }
}
$("#red").on('click', redB);
//changes background red
function redB() {
    $("#container").toggleClass("redBackground")
}
$("#blue").on('click', blueB);
//changes background blue
function blueB() {
    $("#container").toggleClass("blueBackground")
}
$("#yellow").on('click', yellowB);
//changes background yellow
function yellowB() {
    $("#container").toggleClass("yellowBackground")
}
//announces winner but have not figured out how to reset within the function yet
function winner() {
    var p1 = parseInt($("#score1").text());
    var p2 = parseInt($("#score2").text());
    if(p1 === 15){
        $("#leader").text("PLAYER 1 WINNER!!!");
    }
    else if(p2 === 15){
        $("#leader").text("PLAYER 2 WINNER!!!")
    }
    else if(p1 === 15 && p2=== 15){
        $("#leader").text("DRAW!!!")
    }

}