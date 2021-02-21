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

  $(document).on('click', '.next-phase', function () {
    let parent = $(this).parents().first();
    if (!$(".phase-step:hidden").length) {
      parent.find(".phase-step").fadeOut(0);
    } else {
      parent.find(".phase-step:hidden").first().fadeIn(300);
    }
  })

  $(document).on('click', '.back-phase', function () {
    let parent = $(this).parents().first();
    if (!$(".phase-step:visible").length) {
      parent.find(".phase-step").fadeIn(0);
    } else {
      parent.find(".phase-step:visible").last().fadeOut(300);
    }
  })
});
