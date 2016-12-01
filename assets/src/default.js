$(function(){
  $('#showCategories').click(function(e){
    $('.categories').addClass('show-out');
    $('.home').addClass('show-out');
    e.stopPropagation();
  })

  $('.blog-container').click(function(e){
    $('.categories').removeClass('show-out');
    $('.home').removeClass('show-out');
  })

  $('.left-container').click(function(e){
    $('.categories').removeClass('show-out');
    $('.home').removeClass('show-out');
  })

})
