/**
 * Created by leonk1 on 12/21/14.
 */

$(function () {
    $(document).on('click', '.uiViewContent', function () {
        if ($('.navbar-toggle').css('display') != 'none') {
            $(".navbar-toggle").trigger("click");
        }
    });
});