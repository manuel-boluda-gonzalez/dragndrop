$(function(){

    
reset_game();	// Start the game

$('#game_container #button_container #check_button').click(function(){
    $("#game_container .qanswer").promise().done(function() { 				// promise().done() waits for any animations to complete before firing the function
        score_game();														// this is necessary because any divs that have not yet finished the "drop" animation will not be scored
    });
});

$('#game_container #button_container #submit').click(function(){
    $("#game_container .qanswer").promise().done(function() { 				// promise().done() waits for any animations to complete before firing the function
        window.location.href = "http://www.astech.ie/";														// this is necessary because any divs that have not yet finished the "drop" animation will not be scored
    });
});

function reset_game() {

$.getJSON ('output.json' , function (data) {  // This extract the data from the json file

    $('#game_container #draggable_container').html('').removeClass().attr('class', 'subcontainer');
    $('#game_container #droppable_container').html('');

    
    // EXTRACT JSON DATA INTO ANSWERS ARRAY AND SUBCONTAINER ARRAY

    var figures = data.figures;
    var answers = [];

    for (var key in figures) {

        var item = figures[key];

        if (item.ordertwo === "") {

            answers.push({
                text: item.img,
                order: item.order
            })

        } else {

            answers.push({
                text: item.img,
                order: item.order,
                ordertwo: item.ordertwo
            })

        }
        
        
    }

    var divs = data.divs;
    var subcontainers = [];

    for (var key in divs) {
        var item = divs[key];

        subcontainers.push({
            text: item.id,
            order: item.order,
            top: item.top,
            left: item.left
        })
        
    }
    
    answers.sort(function(){ return (Math.round(Math.random())-0.5); }); //Randomize images
    for (var i=0; i<answers.length; i++) {

        if (answers[i].ordertwo === "") {
            $('<div> <img style="height: ' + data.size + '; width: ' + data.size + '"  src="' + answers[i].text + '"> </div>').attr('data', answers[i].order).attr('id', 'answer' + answers[i].order).attr('class', 'dragthis qanswer d-inline').appendTo('#game_container #draggable_container').disableSelection();
        } else {
            $('<div> <img style="height: ' + data.size + '; width: ' + data.size + '"  src="' + answers[i].text + '"> </div>').attr('data', answers[i].order).attr('data2' , answers[i].ordertwo).attr('id', 'answer' + answers[i].order).attr('class', 'dragthis qanswer d-inline').appendTo('#game_container #draggable_container').disableSelection();
        }
    }
    
    $("#game_container #draggable_container").sortable({
        connectWith: '#game_container .subcontainer',
        containment: '#game_container',
        items: 'div',
        revert: 250
    }).disableSelection();
    $('<div id="title" align="right" class="mr-3 mt-1">' + data.name + '</div>').appendTo("#game_container #droppable_container");
    $('<img id="fondo" src="'+ data.background +'" </img>').appendTo('#game_container #droppable_container');
    for (var j=0; j<subcontainers.length; j++) {

        $('<div></div>').attr('class', 'subcontainer bdiv').attr('style', 'position:absolute; top:' + subcontainers[j].top  + '; left:' + subcontainers[j].left + '; width: ' + data.size + '; height: ' + data.size + ';').attr('data', subcontainers[j].order).attr('id', subcontainers[j].text).appendTo('#game_container #droppable_container').sortable({
            containment: "#game_container",
            items: "div",
            revert: 250,
            connectWith: "#game_container .subcontainer",
            receive: function(event, ui) {
                var $this = $(this);
                if ($this.children('div').length > 1 && $this.attr('id') != "main_list") {
                    $(ui.sender).sortable('cancel');
                    if (ui.item.parents('#game_container .subcontainer, #game_container .subcontainer')) {
						ui.item.removeClass('dragthis').addClass('dropped');
					} else {
						ui.item.removeClass('dropped').addClass('dragthis');
					}
                }
            }
        }).disableSelection();       
        
    } 

    $("#game_container #draggable_container").bind("DOMSubtreeModified",function(){
        if ($("#game_container #draggable_container").is(":empty")) {
            $("#game_container #draggable_container").attr("style", "height: " + data.size + ";")
        } 
    });
    


}) 

}

function score_game() {
    
    if (!$("#game_container #draggable_container").is(":empty")) {
        // it's not empty! it would be madness to try to calculate this score.
        
        // fill the message div with text accordingly
        alert('The game is not complete! Please drag all answers to a category first.');
        
        // now we'll animate it growing and appearing. neato
        $('#game_container #message').show().css({
            top: $("#game_container #droppable_container").position().top-50,
            left: $("#game_container #droppable_container").position().left+100
        }).animate( {
            width: '450px',
            height: '80px',
            padding: '20px',
            opacity: 1
        }, 500);
        
        // you don't get a score yet. stop here.
        return;
    }

    $("#game_container .subcontainer").each(function(index){
        $(this).sortable("option","disabled",true);
    });

    $('#game_container #button_container #check_button').attr("disabled", "disabled");

    $correctcounter = 0;																				// keep track of how many are right
		$("#game_container .bdiv").each(function(index){	
            
            var childid2 = null;
            var data2 = $(this).children().attr('data2')


            if(data2 != "" ) {

                var childid2 = $(this).children().attr('data2')	

            }

            $thisid = $(this).attr('data');																	// shortcuts
			$childid = $(this).children().attr('data');
			$(this).css('cursor','default');	
            															// UI helper to help the user know the elements are no longer draggable
			
            if (
                childid2 != "" 
            ) {
                if (
                    $thisid == $childid || $thisid == childid2
                ) {
                    $(this).addClass('correct', 800).removeClass('dropped', 800);								// it's in the right place - make it all green and happy
                    $correctcounter++;	
                } else {
                    $(this).addClass('incorrect', 800).removeClass('dropped', 800);	
                }
            } else {
                if (
                    $thisid == $childid 
                ) {
                    $(this).addClass('correct', 800).removeClass('dropped', 800);								// it's in the right place - make it all green and happy
                    $correctcounter++;																			// +1 to the counter of correct answers
                } else {
                    $(this).addClass('incorrect', 800).removeClass('dropped', 800);								// it's in the wrong place - make it all red and sad
                }
            }

            
            
        });
    
    // tell the user their score, we'll use the heretofore hidden #score_container div for that.
    $.getJSON ('output.json' , function (data) {  // This extract the data from the json file

        var subcontainers = [];
        var divs = data.divs;
        
            for (var key in divs) {
                var item = divs[key];

                subcontainers.push({
                    text: item.id
                })
                
            }

     alert('You got ' + $correctcounter + ' out of ' + subcontainers.length + 'correct!');
    })

}


	


})


	

