// Smeg off my JS file Danny

$(document).ready(function() {

	$('#dannys-beautiful-face').click(function() {
		var dannys_new_name = construct_name();
		$('.your-new-name').html('Your New Name: <span>' + dannys_new_name[0] + ' ' + dannys_new_name[1] + '</span>');
		$('span.danny').html('<s>Danny</s>');
		$('span.pitts').html('<s>Pitts</s>');
		$('div.collection').append('<span class="randum">' + dannys_new_name[0] + ' ' + dannys_new_name[1] + ' </span>');
	});

	function construct_name() {
		// Engaging Name Object
		var danny_pitts = {'danny' : [], 'pitts' : []};

		// POPULATING OBJECT WITH WORDS
		danny_pitts['danny'] = ['Fanny', 'Tranny', 'Clammy', 'Nanny', 'Granny', 'Flabby', 'Runny'];
		danny_pitts['pitts'] = ['Tits', 'Nips', 'Shits', 'Dicks', 'Lips', 'Piss'];

		// Selecting random WORD
		var random_danny = danny_pitts['danny'][Math.floor(Math.random() * danny_pitts['danny'].length)];
		var random_pitts = danny_pitts['pitts'][Math.floor(Math.random() * danny_pitts['pitts'].length)];

		// OH SHIT
		return [random_danny, random_pitts]
	}
});