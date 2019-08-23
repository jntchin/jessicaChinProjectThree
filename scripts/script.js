// flag to indicate when the page first laads, the die is not moving.
let isDieMoving = false;

$(document).ready(function(){

    $('p.clickPrompt').append(`Click here to roll the die`);

    $('.d20').on('click', function(){   
        //initially says "Click here to roll the die"
        if (isDieMoving === false){
            $('p.clickPrompt').empty().html(`Click to stop`);
        }
        else {
            $('p.clickPrompt').empty().html(`Click here to roll the die`);
            let dieRoll = Math.floor(Math.random()*(0-20))+21;
            $('.emptyValue').empty().html(dieRoll);
        };

        // console.log(`inside the die statement`)};
        isDieMoving = !isDieMoving; 

            $('form').on('submit', function(event){
                event.preventDefault();
            });
    })
});
