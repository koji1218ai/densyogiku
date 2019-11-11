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


// main写真の文字が消えたり出たりする.
$(function(){
  // 写真をクリックした時、
  $('#mainImg').on('mouseover',function(){
    // hoge動作が付く
  $('.p1').addClass('hoge1');
  $('.p2').addClass('hoge2');
  $('.p3').addClass('hoge3');

  $('.p1').removeClass('ho1');
  $('.p2').removeClass('ho2');
  $('.p3').removeClass('ho3');

  // fadeInメソッドはCSSをdisplay:none;にしないと作動しないが、
  // display:none;は要素全体を消してしまうので、
  // opacity設定をCSSでしてあげる必要がある
  // $('.p1').fadeIn(1000)、fadeOutは使わない
  })

  // 写真からマウスが離れたら、
  $('#mainImg').on('mouseleave',function(){
  $('.p1').removeClass('hoge1');
  $('.p2').removeClass('hoge2');
  $('.p3').removeClass('hoge3');

  $('.p1').addClass('ho1');
  $('.p2').addClass('ho2');
  $('.p3').addClass('ho3');
})
})

// 文字がスクロールしたら下から現れる。
// 現在値の取得=720
// const pos = $(".sub-text p").offset();
// console.log( pos );

// $(window).on('scroll',function(){
//   // ①今のカーソルの位置を取得
// let now = $(document).scrollTop();
// // ②ターゲットの位置を取得
// let target=$('.sub-text').offset().top;
// // console.log(target);
// // ③１と２を比較する
// if (now = target){
//   // console.log('hoge');
//   $(this).addClass('opacity0');
// // スクロールするとそこまでいく
//   $('body,html').stop()
//   // $(this).addClass('opacity1');
//   $('.sub-text p').slideUp('.opacity1');
// }
// });
// // 文字がスクロールしたら下から現れる終了





// この１個の！写真をホバーしたら文字が出てくる
// mauseoverはマウスが当たっている間中ずっと動作が繰り返されてしまう。
// mouseenterならマウスが当たっている間は１つの動作として処理してくれる。
$('.box').on('mouseenter',function(){
  $(this)
  // childredはbox直下のimgにしか使えないので、findを使うと子孫まで取得できる。
  .find('h4 , p')
  .slideToggle();
  });
$('.box').on('mouseleave',function(){
  $(this)
  .find('h4 , p')
  .slideToggle();
  });


// <!-- 写真スライドショーライブラリcamera-master -->
jQuery(function(){
  jQuery('#camera_wrap_4').camera({
    height: 'auto',
    loader: 'bar',
    pagination: false,
    thumbnails: true,
    hover: false,
    opacityOnGrid: false,
    imagePath: '../images/'
  });

});





// スクロールトップへ行く
$('.scrollTop').on('click',function(){
  $('body,html').animate({scrollTop:0},800);
});




















