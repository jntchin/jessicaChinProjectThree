// flag to indicate when the page first laads, the die is not moving.
let dieMoving = false;

$(document).ready(function(){

    $('p.clickPrompt').append(`Click here to roll the die`);
    $('.d20').css('animation-play-state', 'paused');

    // $('.rotating').empty().css();

    $('.d20').on('click touch', function(){   
        //initially says "Click here to roll the die"
        if (dieMoving === false){
            $('p.clickPrompt').empty().html(`Click to stop`);
            $('.d20').css('animation-play-state', 'running');
        }
        else {
            $('p.clickPrompt').empty().html(`Click here to roll the die`);
            let dieRoll = Math.floor(Math.random()*(0-20))+21;
            $('.emptyValue').empty().html(dieRoll);
            $('.d20').css('animation-play-state', 'paused');
        };

        // console.log(`inside the die statement`)};
        dieMoving = !dieMoving; 
    
    })

    $('form').on('submit', function(event){
        event.preventDefault();
    });

    $('button').on('click', function(){
        // $('p.clickPrompt').empty().html(`Click here to roll the die`);
        // let dieRoll = Math.floor(Math.random()*(0-20))+21;
        let finalDieRoll = dieRoll + 4; 
        console.log(finalDieRoll);
    });

   

});
