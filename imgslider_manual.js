$('.rightButton').on('click', function() {
  var activePic = $('.reveal');
  var nextPic = activePic.next();

  if (nextPic.length === 0) // when at the end of list of img
  {
    nextPic = $('.slider div').first(); //then return to first img
  }
    activePic.removeClass('reveal').addClass('hidden').css("z-index", -10);
    nextPic.addClass('reveal').removeClass('hidden').css("z-index", 20);
    $('.slider div').not([activePic, nextPic]).css("z-index", 1)
  })

$('.leftButton').on('click', function(){
  var activePic =$('.reveal');
  var nextPic = activePic.prev();
  if(nextPic.length === 0)
  {
    nextPic = $('.slider div').last();
  }
  activePic.removeClass('reveal').addClass('hidden').css("z-index", -10);
  nextPic.addClass('reveal').removeClass('hidden').css("z-index", 20);
  $('.slider div').not([activePic, nextPic]).css("z-index", 1);
})
