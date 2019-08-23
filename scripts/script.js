// flag to indicate when the page first laads, the die is not moving.
let dieMoving = false;

$(document).ready(function(){

    $('p.clickPrompt').append(`Click here to roll the die`);
    // $('.rotating').empty().css();

    $('.d20').on('click', function(){   
        //initially says "Click here to roll the die"
        if (dieMoving === false){
            $('p.clickPrompt').empty().html(`Click to stop`);
            // $('section.d20').append('.rotating');

        }
        else {
            $('p.clickPrompt').empty().html(`Click here to roll the die`);
            let dieRoll = Math.floor(Math.random()*(0-20))+21;
            $('.emptyValue').empty().html(dieRoll);
        };

        // console.log(`inside the die statement`)};
        dieMoving = !dieMoving; 

            $('form').on('submit', function(event){
                event.preventDefault();
            });
    })
});
