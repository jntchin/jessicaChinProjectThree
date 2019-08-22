
$(document).ready(function(){
//on a click event, animate a 20-sided polygon (rotate) 
//add message (html) saying "click to stop"
    $('.d20').on('click', function(){
        console.log(`Click again to stop`);
       

//on another click or touch event, stop the animation
//add message saying "click / touch for a new roll"
//show a random number from 1 to 20 on the die itself
//store that number
//show that number as the total

    $('p.clickPrompt').empty().html(` Click again to stop!`);
    

    let dieRoll = Math.floor(Math.random()*(0-20))+21
        console.log(dieRoll);
        $('.emptyValue').empty().html(dieRoll);
        // $('p.finalRoll').append(dieRoll);
        
        

}); 


    $('form').on('submit', function(event){
        event.preventDefault();

//listen for a form submit from the drop-down menu
//on a submit, add that number to the die value
//prevent default / refresh for form submission
//show a total score
    
});



//STRETCH GOALS
//add another drop-down menu to select the type of roll (different ability checks, attack rolls, etc.). The values in the menu would be displayed when the total score is displayed, e.g. "perception check: 14"
//animate other polygons based on click events (6, 4, 10, 12, 8-sided dice)

});
