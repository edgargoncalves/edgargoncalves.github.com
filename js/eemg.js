// load frameworks with google ajax api loader:
google.load("jquery", "1.4.0");
google.load("jqueryui", "1.7.2");

function updateStyles () {
    //hover states on the static widgets
    $('.eemg-button').hover(
	function() { $(this).addClass('ui-state-hover'); }, 
	function() { $(this).removeClass('ui-state-hover'); }
    );
    $('.eemg-menubutton').hover(
	function() { $(this).addClass('ui-state-hover'); }, 
	function() { $(this).removeClass('ui-state-hover'); }
    );
}


function setupMenuButton(name) {
    $("#"+name).click(function (){
			  $("#page-contents").fadeOut("normal", function () {
							  $("#page-contents").load("./" + name + ".html"); 
							  $("#page-contents").fadeIn("normal", null);
							  updateStyles();
						      });
		      });
    return false;
}

function initPage () {
    // do stuff when DOM is ready
    $(function(){
	  updateStyles();

	  // setup link actions on menuX to replace page-contents
	  setupMenuButton("menu1");
	  setupMenuButton("menu2");
	  setupMenuButton("menu3");
	  setupMenuButton("menu4");

      });
}





google.setOnLoadCallback(function () {$(document).ready(initPage);});
