

// ----------- startTarget --------------
const startTarget = (numOfItem) => {
    for (let i=0;i <numOfItem; i++) {
        let target = '<img src="imges/targetl.png" alt="targetl"></img>';
        let gridItem = "<div class=\"grid-item target"+i+"\">"+ target +"</div>";
        // לאוסיף אנימציה של שניה לכל ריבוע
        $(".grid-container").append(gridItem);
        $('.target'+i+ ' img').hide();
    }
};
startTarget(5);
// ----------- endTarget --------------


// ----------- start for loop --------------
const targetGenericity  = (numOfItem) => {
    let targetImg = [];
    for(let i=0; i < numOfItem; i++){
        targetImg[i] = [i,$('.target'+i+ ' img').hide()];
    }
    return targetImg;
}
console.log(targetGenericity(5));
const targetG = targetGenericity(5);
// ----------- end for loop --------------


// ----------- Check if H or S -----------

const checkHor = (_targetG) => {
    let randomWondow = [];
    targetG.forEach((value, key) =>{
        if(value[1].is(':hidden')){
            randomWondow[key] = key;
            randomWondow = randomWondow.filter(() => true);
        }
    });
    let randomItem = Math.floor(Math.random() * randomWondow.length);
    console.log('randomItem '+randomItem, targetG[randomWondow[randomItem]][0]);
    $(targetG[randomWondow[randomItem]][1]).show();
    
    setTimeout(hideImg, 2000);
    function hideImg(){
        if ($(targetG[randomWondow[randomItem]][1]).is(':visible')) { // '.1 > img'
            $(targetG[randomWondow[randomItem]][1]).hide();
        }
    }
    console.log(randomWondow);
    return randomWondow;
}

for(let i = 300; i <= 10000;i += 500){
    setTimeout(checkHor, i);
}

