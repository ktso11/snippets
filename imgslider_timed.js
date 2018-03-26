setInterval(function(){
$('.slider div:first-child').addClass('hidden').removeClass('reveal').css("z-index", -10)
.next('div').removeClass('hidden').addClass('reveal').css("z-index", 20)
.end('').appendTo('.slider').css("z-index", 1)} //orignal element returns to slider (first-child is going back to the back of slider)
,4000); //execute function every 4000 milliseconds
