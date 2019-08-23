const dieRollApp = {};

dieRollApp.dieMoving = false;
dieRollApp.initialState = function(){ 
    $('p.clickPrompt').append(`Click here to roll the die`);
    $('.d20').css('animation-play-state', 'paused');
};

dieRollApp.rollDie = function(){
    $('.d20').on('click touch', function(){   
    //initially says "Click here to roll the die"
    if (dieRollApp.dieMoving === false){
        $('p.clickPrompt').empty().html(`Click to stop`);
        $('.d20').css('animation-play-state', 'running');
    }
    else {
        $('p.clickPrompt').empty().html(`Click here to roll the die`);
        dieRollApp.dieRoll = Math.floor(Math.random()*(0-20))+21;
        $('.emptyValue').empty().html(dieRollApp.dieRoll);
        $('.d20').css('animation-play-state', 'paused');
    };

    // console.log(`inside the die statement`)};
    dieRollApp.dieMoving = !dieRollApp.dieMoving; 

    })
};



// flag to indicate when the page first laads, the die is not moving.


$(document).ready(function(){
    dieRollApp.initialState();
    dieRollApp.rollDie();
    
  

    // $('.rotating').empty().css();

   

    $('form').on('submit', function(event){
        event.preventDefault();
    });

    $('button').on('click', function(){
        // $('p.clickPrompt').empty().html(`Click here to roll the die`);
        // let dieRoll = Math.floor(Math.random()*(0-20))+21;
        // let modifier = document.getElementById('number');
        // console.log(modifier);
        
        dieRollApp.finalDieRoll = dieRollApp.dieRoll + 4; 
        console.log(dieRollApp.dieRoll,dieRollApp.finalDieRoll);
    });

   

});
