/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
	"use strict";

	$('.grid').isotope({
  // options
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	});
	$('.filter-button-group').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$('.grid').isotope({ filter: filterValue });
	});

});
