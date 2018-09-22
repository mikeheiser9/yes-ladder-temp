$(document).ready(function () {
    
    $('#ladder-container').html("<div class='row top-row'><h1 class='fill-head'>Advertorial Goes Here</h1></div><div class='row ladder'><button type='button' class='btn btn-xl solidButtons' id='start-survey-btn' href='#startSurvey' data-toggle='modal'>Start Survey</button></div>");

    $("#survey-holder").html("<div class='row survey-question'><p>Carson Wentz has a huge massive penis?</p></div><div class='row input-row'><form action='POST'><input type='radio' name='selection' data-name='true'>True</input><br><br><input type='radio' name='selection' data-name='false'>False</input><br><br><input type='submit'></form></div>")
});

