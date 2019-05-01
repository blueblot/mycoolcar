// Stock & Search
function APISearchLoad() {
	$("select").addClass("form-control");
}
function APIStockLoad() {
	//Pager scroll up
	$(".vehicleDataPagerCtn").on("click", ".previousPage, .nextPage, .pagerNumeric", function () {
		console.log("clicked on nextpage");
		$("html, body").animate({ scrollTop: 0 }, "slow");
		console.log("scroll to the top!")
		return false;
	});
}
// Car Details & Forms
function APICarDetailsLoad() {
	$(document).ready(function () {
		$('#imageGallery').lightSlider({
			gallery: true,
			item: 1,
			loop: true,
			thumbItem: 5,
			slideMargin: 0,
			enableDrag: false,
			currentPagerPosition: 'left',
			onSliderLoad: function (el) {
				el.lightGallery({
					selector: '#imageGallery .lslide'
				});
			},
			//vertical: true,
			//verticalHeight: 768,
			//vThumbWidth: 100
		});
	});
	updateFormTitle();

}
function APIFormLoad() {
	updateFormTitle();
}
function updateFormTitle() {
	$('#exampleModal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) // Button that triggered the modal
		var form_subject = button.data('form') // Extract info from data-* attributes
		// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
		// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
		var modal = $(this)
		modal.find('.modal-title').text(form_subject)
		//modal.find('.modal-body input').val(form_subject)
		var formInjectSubject = $("#exampleModalLabel").text();
		console.log(formInjectSubject);
		$("#formsubject").val(formInjectSubject);
	})
	
}