$(function(){



// 電球の数を取得する
  let num = $('.light').length;


  // ⭐︎  をfor文で回す
  // for(let i = 0,i < 3,i++;){

  // }


  // ⭐︎   当たりの電球を指定する
  let atari = Math.floor(Math.random() * num);

  // ⭐︎   当たりのテキストを作成
  let text = $('<span>')
  .text('当たり！')
  .addClass('text');

  //  ⭐︎textを画面の電球の当たりに追加する。
  $('.light').eq(atari).append(text);
  



  // 電球をクリックした時
  // 何番目がクリックされたのかの確認(index)
  $('.light').on('click',function(){
    let index = $('.light').index(this);
    
  // もしクリックされた電球が当たりだったら
  if (index === atari){
    // 電球の写真部分が消える＝透明になる
    $(this).find('img').animate({opacity:0}, 1500)
    .end()
    // テキスト（当たり）を表示する。textはspanタグなので
    .find('span').animate({opacity:1},1500);
  } else {
    $(this).animate({opacity:0},1500);
    $(this).animate({opacity:1},1500);
  }
  })





});
























