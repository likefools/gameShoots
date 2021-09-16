
function mytarget(){
    for (var i=0;i <20; i++) {
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
const mySet = new Set();

var myTimer = setInterval(myTimer, 1000);

let i = 0;
function myTimer(){
    let j = Math.floor(Math.random() * 20);
    if (!mySet.has(j)){
        mySet.add(j);
        $('.'+j+ ' img').show();
        setTimeout(hideImg, 3000);
        mySet.delete(j);
    }

    function hideImg(){
        if ($('.'+j+ ' img').is(':visible') == true) { // '.1 > img'
            $('.'+j+ ' img').hide();
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
    if (i == 30){
        myStopFunction();
    }
    
}

function myStopFunction() {
    clearInterval(myTimer);
}

