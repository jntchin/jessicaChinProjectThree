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

dieRollApp.addModifier = function(){
    $('button').on('click touch', function(){ 
        dieRollApp.modifier = parseInt($('option:selected').attr('value'));
        dieRollApp.finalDieRoll = dieRollApp.modifier + dieRollApp.dieRoll
        $('.emptyValue').empty().html(dieRollApp.finalDieRoll);
    });
};



$(document).ready(function(){

    dieRollApp.initialState();
    dieRollApp.rollDie();
    dieRollApp.addModifier();
   

    $('form').on('submit', function(event){
        event.preventDefault();
    });

});
