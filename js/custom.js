/* Accordion panels shown */
$('#accordion .panel-collapse').on('shown.bs.collapse', function () {
    $(this).prev().find(".fa").removeClass("fa-plus").addClass("fa-minus");
});

//The reverse of the above on hidden event:

$('#accordion .panel-collapse').on('hidden.bs.collapse', function () {
    $(this).prev().find(".fa").removeClass("fa-minus").addClass("fa-plus");
});
$(document).ready(function() {
    $('#search .trigger').click(function(){
        $('.search-bar').animate({width: 'toggle' },1500);
    });
});

/* Clickable Row */
jQuery(document).ready(function($) {
      $("tr").click(function() {
            window.document.location = $(this).attr("href");
      });
});

