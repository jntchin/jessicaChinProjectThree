const dieRollApp = {};

dieRollApp.dieMoving = false;


dieRollApp.initialState = function(){ 
    $('p.clickPrompt').append(`Click the d20 to roll it`);
    $('.20SidedDie').css('animation-play-state', 'paused');
};

dieRollApp.rollDie = function(){
    $('.20SidedDie').on('click touch', function(){   
    if (dieRollApp.dieMoving === false){
        $('p.clickPrompt').empty().html(`Click the d20 to stop it`);
        $('.20SidedDie').css('animation-play-state', 'running');
    }
    else {
        $('p.clickPrompt').empty().html(`Click the d20 to roll it`);
        dieRollApp.dieRoll = Math.floor(Math.random()*(0-20))+21;
        $('.emptyValue').empty().html(dieRollApp.dieRoll);
        $('.20SidedDie').css('animation-play-state', 'paused');
    };

    // console.log(`inside the die statement`)};
    dieRollApp.dieMoving = !dieRollApp.dieMoving; 

    })
};

dieRollApp.formSubmit = function(){
    $('form').on('submit', function(event){
        event.preventDefault();
    });
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
    dieRollApp.formSubmit();
    dieRollApp.addModifier();

});
