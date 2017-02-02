

$(document).ready(function(){
	$(".hidden").hide();

	$("button.btn").click(function() {
		var btn = $(this);
		var section = btn.closest('.section');
		var hidn = section.children('.hidden');

		var display = hidn.css("display");
		if( display == "none" ) {
			hidn.show();

			var cross_image = 'url("./assets/imgs/Icons-07.png")';
			btn.css("background-image", cross_image);
	    }
		else {
			hidn.hide();

			var plus_image = 'url("./assets/imgs/Icons-06.png")';
			btn.css("background-image", plus_image);
	    }
	});
});
