
var numOfItem = 10;
var myTimer;
var start = false;
const memo = []
// מריץ מספר רוביעים ומכניס להם תמונה מוסתרת
function mytarget(){
    // לאוסיף אנימציה של שניה לכל ריבוע
    for (let i=0;i <numOfItem; i++) {
        
        let gridItem = $("<div class=\"grid-item target"+i+"\"></div>");
        $(".grid-container").append(gridItem);
        let target = '<img src="imges/targetl.png" alt="targetl"></img>';
        
        $('.target'+i).prepend(target);
        memo[i] =$('.target'+i+ ' img').hide();
    }
    console.log(memo);
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
    // מקבל מספר רנדומלי
    let randomItem = Math.floor(Math.random() * numOfItem);
    console.log(memo[randomItem]);
    // בודק אם הפריט כבר קיים
    if ($('.target'+randomItem+ ' img').is(':visible') != true){
        // console.log(randomItem);
        // $('.target'+randomItem+ ' img').show();
        $(memo[randomItem]).show();
        // setTimeout(hideImg, 3000);
    }

    // console.log(mySet);
    // if (!mySet.has(randomItem)){
        // mySet.add(randomItem);
        // $('.target'+randomItem+ ' img').show();
        // mySet.delete(randomItem);
        // setTimeout(hideImg, 3000);
        
    // }

    function hideImg(){
        if ($('.target'+randomItem+ ' img').is(':visible') == true) { // '.1 > img'
            $('.target'+randomItem+ ' img').hide();
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
    $('h3 span').text(i);
    if (i == 20){
        myStopFunction();
    }
    
}

function myStopFunction() {
    clearInterval(myTimer);
    start = false;
}

