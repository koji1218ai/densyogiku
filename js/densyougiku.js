$(function(){

// 電球の数を取得する
let num = $('.light').length;

// 当たりの番号を入れる配列
let atariList = [];
let atariNum = 5;

// atariListの要素数が当たりの数未満であれば繰り返す
  while(atariList.length < atariNum){

  // ⭐︎   当たりの電球を指定する
  let atari = Math.floor(Math.random() * num);

    // ⭐︎   当たりのテキストを作成
    let text = $('<span>')
    .text('当たり！')
    .addClass('text');
    
    //  ⭐︎ textを画面の電球の当たりに追加する。
    $('.light').eq(atari).append(text);

    // atariNumの配列に値が存在しなければ追加
    if(atariList.indexOf(atari) == -1)
    {
      atariList.push(atari);
    }
  }
  console.log(atariList.length);

  
      
      // 電球をクリックした時
      // 何番目が(どこが)クリックされたのかの確認(index)
      $('.light').on('mouseover',function(){
        let index = $('.light').index(this);
        
        // もしクリックされた電球が当たりだったら
        if (atariList.indexOf(index) >= 0)
        {
          // 電球の写真部分が消える＝透明になる
          $(this).find('img').animate({opacity:0}, 1500)
          .end()
          // テキスト（当たり）を表示する。textはspanタグなので
          .find('span').animate({opacity:1},1500);
        } else {
          $(this).animate({opacity:0},1500);
          $(this).animate({opacity:1},1500);
          $(this).animate({opacity:0},1500);
          $(this).animate({opacity:1},1500);
        }
      })
        
    });
