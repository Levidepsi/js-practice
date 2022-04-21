let $ = jQuery;

$(document).ready(function() {
	let data = [];
	$(".icons").click(function(e) {
		let id = $(this).attr("data-id");
		if ($(this).hasClass("active")) {
			//  do somethiung
			data.splice(data.indexOf(id), 1);
		} else {
			data.push(id);
		}

		$(this).toggleClass("active");
		console.log(data);
	});
});

function myFunction(e) {
	console.log(e);
	// lists.class
}

// when clicked check when theres active current element if there is remove from array if not put it on array
