
var numOfItem = 10;
var myTimer;
var start = false;

const map = new Map([]);

for(let i=0; i < 10; i++){
    map.set(i,'h');
}
console.log(map);
map.set(2,'s');
map.set(5,'s');
map.set(6,'s');
// console.log(map.size);

var randomWondow = [];
map.forEach (function(value, key) {
    if(value == 'h'){
        console.log(key);
        // יכנס את המספר למערך
        randomWondow[key] = key;
        randomWondow = randomWondow.filter(Boolean);
    }
})
console.log(randomWondow);
const memo = [];


// מריץ מספר רוביעים ומכניס להם תמונה מוסתרת
function mytarget(){
    for (let i=0;i <numOfItem; i++) {
        let gridItem = $("<div class=\"grid-item target"+i+"\"></div>");
        // לאוסיף אנימציה של שניה לכל ריבוע
        $(".grid-container").append(gridItem);
        // the img
        let target = '<img src="imges/targetl.png" alt="targetl"></img>';
        $('.target'+i).prepend(target);
        memo[i] = {id: i, name: $('.target'+i+ ' img').hide()};
        // memo.set(i, $('.target'+i+ ' img').hide());
    }
    console.log(memo.length);
}
mytarget();

$('.start').click(function(){
    if (start != true) {
        myTimer = setInterval(myTimer, 500);
        start = true;
    }
});
$('.stop').click(function(){
    if (start == true) {
        myStopFunction();
    }
});

// const mySet = new Set();
// var list = [];
// for (let [key,val] of memo.entries()) {
//     const key = Math.floor(Math.random() * memo.size);
//     // console.log(val);
//     memo.set(key, $('.target'+key+ ' img').show());

//     if (val.is(":visible")) {
//         console.log(key);
//         list += [`${key}`];
//     }  
// }
// console.log(list);


// const random = Math.floor(Math.random() * memo.size);
// memo.set(random, $('.target'+random+ ' img').show());


let randomItem = Math.floor(Math.random() * memo.length);
console.log(randomItem, memo[randomItem]);
console.log($(memo[randomItem].name).show());

if ($(memo[randomItem].name).is(':visible')) {
    console.log('yes');
    var on = memo[randomItem].id;
}

let i = 0;
function myTimer(){
    // מקבל מספר רנדומלי
    let randomItem = Math.floor(Math.random() * memo.length);
    console.log(randomItem, memo[randomItem]);
    // בודק אם הפריט כבר קיים
    if ($('.target'+randomItem+ ' img').is(':visible') != true){
        // console.log(randomItem);
        // $('.target'+randomItem+ ' img').show();
        $(memo[randomItem].name).show()
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

