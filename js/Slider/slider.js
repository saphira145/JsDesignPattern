// Build Image List
var imageListBuilder = (function() {

	// Data for images
	var data = {
		images : images
	}

	// Varriables
	var $imageList = $(".images-list");
	var template = $("#images-list").html();

	// Build List Images
	buildListImages();

	function buildListImages() {
		var html = Mustache.to_html(template, data);
		$imageList.html(html);	
	}

	return {
		getImagesListSelector : function() {
			return $imageList;
		},
	}

})();

// Slider
var slider = (function() {
	// Data for images
	var data = {
		images : images
	}
	// Variables
	var $overlay = $(".overlay");
	var $slider = $(".slider");
	var $imagesList = imageListBuilder.getImagesListSelector();
	var template = $("#images-slider").html();
	var widthWindow = $(window).width();
	var index = 1;
	 
	// Build slider
	buildSlider();

	// Get Total images
	var totalImage = $slider.find("li").length;

	// Bind Events
	$imagesList.on('click', 'li', sliderPopup);
	$slider.on('click', '.left-arrow', prevImage);
	$slider.on('click', '.right-arrow', nextImage);

	// Build slider
	function buildSlider() {
		var html = Mustache.to_html(template, data);
		$slider.html(html);
		$slider.css('width', widthWindow * 14 + 'px');
	}

	// Slider Popup when click
	function sliderPopup(event) {
		index = $(event.target).parent("li").attr("index");
		showImageAtPosition(index);
	}

	// Return next image when click next
	function nextImage() {
		index++;
		if (index > totalImage)
			index = 1;
		showImageAtPosition(index);
	}

	// Return previous image when click previous
	function prevImage() {
		index--;
		if (index < 1)
			index = totalImage;
		showImageAtPosition(index);
	}

	// Show image at particular index
	function showImageAtPosition(index) {
		$overlay.show();
		$slider.show();
		// $slider.find("li").hide();	
		// $slider.find("li[index='"+ index +"']").show();
	}

	// Close slider
	function closeSlider() {
		$overlay.hide();
		$slider.hide();
		$slider.find("li").hide();	
	}

	return {
		nextImage : nextImage, 
		prevImage : prevImage,
		showImageAtPosition : showImageAtPosition,
		closeSlider : closeSlider
	}

})();

