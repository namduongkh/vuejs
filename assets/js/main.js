import App from "./vue/app";

$(function () {
  $(window).on('scroll', function () {
    var fixmeTop = $('.intro').height();
    var currentScroll = $(window).scrollTop();

    if (currentScroll >= fixmeTop) {
      $('.nav').addClass('fixed')
      $('.main-content').addClass('tab-fixed')
    } else {
      $('.nav').removeClass('fixed')
      $('.main-content').removeClass('tab-fixed')
    }
  });
});
