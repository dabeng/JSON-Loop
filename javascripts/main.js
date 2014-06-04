$(function($){
  // show sample data
  $('.sampledata').on('click', function() {
    var that = $(this);
    that.siblings().hide().end().css('background', 'transparent');
    that.animate({'width': 968, 'height': 568}, 500, function() {
      that.children('.sourcecode').show();
      $('.commandBtn').show();
    });
    that.children('.heading').animate({'font-size': 30}, 500);
    that.children('.description').animate({'font-size': 20}, 500);
  });

  //

});
