"use strict";

$(document).ready( () => {

    const scores = [];

    $("#add_score").click( () => {
        
        const score = parseFloat($("#score").val());
                
        if (isNaN(score) || score < 0 || score > 100) {
            $("#add_score").next().text("Score must be between 0 and 100."); 
            // $("#message").text("Score must be between 1 and 100.");
        }
        else {
            $("#add_score").next().text("");  
            // $("#message").text("");  // remove any previous error message

            // add score to scores array 
            scores.push(score);

            // display all scores
            $("#all").text(scores.join(", "));

            // display average score
            const total = scores.reduce( (tot, val) => tot + val, 0 );
            const avg = total/scores.length;
            $("#avg").text(avg.toFixed(2));

            // display last 3 scores
            const len = scores.length;
            const copy = (len <= 3) ? scores.slice() : scores.slice(len - 3, len); // copy last three
            copy.reverse();
            $("#last").text(copy.join(", "));
        }
        
        // get text box ready for next entry
        $("#score").val("");
        $("#score").focus(); 
    });

    $("#delete_score").click( () => {

    }); 

    // set focus on initial load
    $("#score").focus();
});