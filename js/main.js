//checkbox
$(".icheck-text input[type=checkbox]").switchButton({
    labels_placement: "left",
    on_label: 'Có',
    off_label: 'Không',
    width: 40,
    height: 17,
    button_width: 20
});
$(".icheck input[type=checkbox]").switchButton({
    show_labels: false,
    width: 40,
    height: 17,
    button_width: 20
});
// sidebar collapse
$('.btn-sidebar-collapse').click(function (e) {
    $('.main-content').toggleClass('sidebar-collapse');
    e.stopPropagation();
});


//scrollbar
(function ($) {
    $(window).load(function () {
        $(".sidebar").mCustomScrollbar();
    });
})(jQuery);

$(document).ready(function () {
    $(window).resize(function () {
        if ($(window).width() <= 950) {
            $('.main-content').addClass('sidebar-collapse');
        } else {
            $('.main-content').hasClass('sidebar-collapse');
            $('.main-content').removeClass('sidebar-collapse');
        }
    });
});