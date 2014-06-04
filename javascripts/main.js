$(function($){
  // show sample data
  $('.topic').on('click', function() {
    var that = $(this);
    that.siblings().hide().end().css('background', 'transparent');
    that.animate({'width': 968, 'height': 568}, 500, function() {
      that.children('.sourcecode').show();
      $('.commandBtn').show();
    });
    that.children('.heading').animate({'font-size': 30}, 500);
    that.children('.description').animate({'font-size': 20}, 500);
  });

  // run the code dynamically
  $('.commandBtn.run').on('click', function() {
    if ($('.sourcecode').not(':hidden').length > 0) {
      eval($('.sourcecode').not(':hidden')[0].value);
    }
  });

  // back to the index page
  $('.commandBtn.back').on('click', function() {
    var currentTopic = $('.sourcecode').not(':hidden');
    currentTopic.removeAttr('style');
    currentTopic.animate({'width': 230, 'height': 160}, 500, function() {
      currentTopic.siblings().show();
      currentTopic.children('.sourcecode').hide();
      $('.commandBtn').hide();
    });
    currentTopic.children('.heading').animate({'font-size': 12}, 500);
    currentTopic.children('.description').animate({'font-size': 12}, 500);
  });

});
