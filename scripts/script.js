
//on a click event, animate a 20-sided polygon (rotate) 
//add message (html) saying "click to stop"
//on another click event, stop the animation
//add message saying "click for a new roll"
//show a random number from 1 to 20 on the die itself
//store that number
//show that number as the total

//listen for a form submit from the drop-down menu
//on a submit, add that number to the die value
//prevent default / refresh for form submission
//show a total score


$(document).ready(function(){

    $(body).on('click', function(){
        console.log(`Click again to stop`);
    });

});



//STRETCH GOALS
//add another drop-down menu to select the type of roll (different ability checks, attack rolls, etc.). The values in the menu would be displayed when the total score is displayed, e.g. "perception check: 14"
//animate other polygons based on click events (6, 4, 10, 12, 8-sided dice)


