$(function($){
  // show sample data
  $('.topic').not('.note').on('click', function() {
    var that = $(this);
    that.siblings().hide();
    that.animate({'width': 968, 'height': 568}, 300, function() {
      that.children('.sourcecode').show();
      $('.commandBtn').show();
    });
    that.children('.heading').animate({'font-size': 30}, 300);
    that.children('.description').animate({'font-size': 20}, 300);
  });

  // run the code dynamically
  $('.commandBtn.run').on('click', function() {
    console.clear();
    var currentTopic = $('.topic').not(':hidden');
    if (currentTopic.is('.instantiation')) {
      eval($('.topic.sampledata').children('.sourcecode')[0].value);
    }
    if (currentTopic.is('.method')) {
      eval($('.topic.sampledata').children('.sourcecode')[0].value);
      eval($('.topic.instantiation').children('.sourcecode')[0].value);
    }
    eval(currentTopic.children('.sourcecode')[0].value);
  });

  // back to the index page
  $('.commandBtn.back').on('click', function() {
    var currentTopic = $('.topic').not(':hidden');
    currentTopic.animate({'width': 230, 'height': 160}, 300, function() {
      currentTopic.siblings().fadeIn();
      currentTopic.children('.sourcecode').hide();
      $('.commandBtn').hide();
    });
    currentTopic.children('.heading').animate({'font-size': 20}, 300);
    currentTopic.children('.description').animate({'font-size': 16}, 300);
  });

});
