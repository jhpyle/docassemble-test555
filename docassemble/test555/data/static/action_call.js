function callback(data){
  console.log(data);
}
$(document).on('daPageLoad', function(){
  $(".mybutton").on('click', function(e){
    action_call('foo', {}, callback, undefined, true);
    e.preventDefault();
    e.stopPropagation();
  });
});
