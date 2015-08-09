
var imageList = (function() {

	// Data for images
	var data = {
		images : images
	}

	// Varriables
	var $imageList = $(".image-list");
	var template = $("#images-list").html();

	// Build List Images
	buildListImages();

	function buildListImages() {
		var html = Mustache.to_html(template, data);
		$(".images-list").html(html);	
	}
	

})();

