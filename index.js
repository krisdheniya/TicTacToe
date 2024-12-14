var count=0;
var boxes=document.querySelectorAll(".btn");
$(document).ready(function(){
    $(".btn").click(function(){
        let currentBtn = $(this);
        if(currentBtn.text() !==""){
            currentBtn.addClass("redAlert");
            setTimeout(function(){
                currentBtn.removeClass("redAlert");
            },300);
        }
        else{
            if(count%2 ==0) {
                currentBtn.html("X");
            }
            else {
                currentBtn.html("O");
            }
            count++;
        }
        checkWinnwer();
    });
});

var winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

function checkWinnwer(){
    for(let pattern of winPatterns){
        let po1=boxes[pattern[0]].innerHTML;
        let po2=boxes[pattern[1]].innerHTML;
        let po3=boxes[pattern[2]].innerHTML;

        if(po1 !="" && po2 !="" && po3 !=""){
            if((po1===po2 && po2===po3)){
                count=0;
                $("h1").text(`${po1} Wins!!`); 
                $(".btn").prop("disabled", true);
                $("p").text("Press reset to play again!");
                return;
            }
            else if(count==9){
                count=0;
                $("h1").text("Draw!"); 
                $(".btn").prop("disabled", true);
                $("p").text("Press reset to play again!");
                return;
            }
        }
    }
}

$(".resetbtn").click(function(){
    count=0;
    $(".btn").text("");
    $(".btn").prop("disabled", false);
    $("h1").text("Tic Tac Toe");
    $("p").text("");
})

    