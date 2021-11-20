
var numOfTrdet = 10;
var myTimer;
var start = false;

function mytarget(){
    for (var i=0;i <numOfTrdet; i++) {
        let gridItem = $("<div class=\"grid-item "+i+"\"></div>");
        $(".grid-container").append(gridItem);
        let target = '<img src="imges/targetl.png" alt="targetl"></img>';
        $('.'+i).prepend(target);
        $('.'+i+ ' img').hide();
    }
    // let j = Math.floor(Math.random() * 10);
    // let target = '<img src="imges/targetl.png" alt="targetl"></img>';
    //     $('.'+j).prepend(target);
}

mytarget();

// class name '1' = img
$('.start').click(function(){
    // alert("hi");
    if (start != true) {
        myTimer = setInterval(myTimer, 500);
        start = true;
    }
});

$('.stop').click(function(){
    // alert("hi");
    if (start == true) {
        myStopFunction();
    }
})

// const mySet = new Set();


let i = 0;
function myTimer(){
    let windowTrdet = Math.floor(Math.random() * numOfTrdet);
    console.log(windowTrdet);
    // console.log(mySet);
    // if (!mySet.has(windowTrdet)){
        // mySet.add(windowTrdet);
        $('.'+windowTrdet+ ' img').show();
        // mySet.delete(windowTrdet);
        setTimeout(hideImg, 3000);
        
    // }

    function hideImg(){
        if ($('.'+windowTrdet+ ' img').is(':visible') == true) { // '.1 > img'
            $('.'+windowTrdet+ ' img').hide();
        }
    }
    

    $(".grid-item img").click(function(){
        $(this).hide();

        // for (let i = 0; i < 50; i++) {
        //     if ($('.'+i+ ' img').is(':hidden') == true) { // '.1 > img'
        //         $(this).show(3000);
        //     }
        // }
        
    });
    i++;
    $('h3').text("i is " + i);
    if (i == 5){
        myStopFunction();
    }
    
}

function myStopFunction() {
    clearInterval(myTimer);
    start = false;
}

