$(function(){
  // icon押したら、menuが出てくる
$('.menu-box i').on('click',function(){
  $(this).siblings().slideToggle();
})
});


// 検索欄に入力したら文字が赤になる
$(function(){
$('.focus').on('click',function(){
  $(this).css('color','red');
})
});


// main写真の文字が消えたり出たりする
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


// この１個の！写真をホバーしたら文字が出てくる
$('img',this).on('mouseover',function(){
  $(this).children('h4','p').slideToggle();
  // if ($('this').hasClass("active")) {
  // $('.box-text').slideToggle();

  //   return false;
  // }

  // $('.box img').removeClass('active');
  // $(this).addClass('active');
})




















