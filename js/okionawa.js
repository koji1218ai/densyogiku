$(function(){
  // icon押したら、menuが出てくる
$('.menu-box i').on('click',function(){
  $(this).siblings().slideToggle();
})
});

$(function(){
// inputに入力したら、中身が消えてる
$('.focus').on('click',function(){
  $(this).val('');
})
});

$(function(){
  $('#mainImg').on('mouseover',function(){
    // for (let i = 0,i < plist.length,i++){
    // }
  $('.p1').fadeIn(1000);
  $('.p2').fadeIn(2000);
  $('.p3').fadeIn(3000);
  })
  $('#mainImg').on('mouseleave',function(){
  $('.p1').fadeOut(1000);
  $('.p2').fadeOut(2000);
  $('.p3').fadeOut(3000);
})

})





















