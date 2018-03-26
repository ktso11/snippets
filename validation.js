$('form').on('submit', function(event){
  event.preventDefault();
  $('form input, form textarea').each(function() {
    if ($(this).val() === ""){
      $(this).addClass('error');
      $(this).next('#insertSomething').show();
    } else {
      $(this).removeClass("error");
      $(this).next('#insertSomething').hide();
    }
  })
})
