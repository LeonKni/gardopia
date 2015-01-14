/**
 * Created by leonk1 on 12/21/14.
 */

$(function () {
    /* affix the navbar after scroll below header */
    $('#navContainer').affix({
        offset: {
            top: $('header').height()-$('#navContainer').height()
        }
    });

    /* highlight the top nav as scrolling occurs */
    $('body').scrollspy({ target: '#navContainer' })
});