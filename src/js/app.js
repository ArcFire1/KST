;

(function ($) {

  "use strict";

  $(function () {

    $('.header-hamb').click(function() {
      $(this).toggleClass('header-hamb_active');
      $('.header-wrapper').toggleClass('header-wrapper_active');
    });

    if($('.modal').length) {
      const modalOverlay = $('.modal-overlay');
      const modal = $('.modal');
      const closeBtn = modal.find('.modal-close');
      const modalToggler = $('.modal-button');

      modalToggler.click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        if (modalOverlay.hasClass('is-open')) {
          $('html').removeClass('modal-open');
          modalOverlay.removeClass('is-open');
        } else {
          $('html').addClass('modal-open');
          modalOverlay.addClass('is-open');
        }
      });

      $(document).on('click', function(e) {
        if (!$(e.target).closest(".modal").length || $(e.target).is('.modal-close')) {
          $('html').removeClass('modal-open');
          modalOverlay.removeClass('is-open');
        } 
        e.stopPropagation();
      });
    }

  });
})(jQuery);
