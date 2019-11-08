$(function(){

  // マウスオーバーされた時に、点滅。
$('.light').on('click',function(){
  $(this).animate({opacity:0},1500);
  $(this).animate({opacity:1},1500);
})

// この中で５個だけ写真の裏に当たりが隠れています。
// 写真をクリックしたら写真が消えて、文字の当たりが出てきます。

// ランダムで当たりを設定
let num = 5;
let winner = Math.floor(Math.random()*num);

// 
for (let i = 0;i <num;i++){
  let text = document.getElementsByClassName('text');
  // 当たり文字を初めは非表示にします
  text.style.visibility='hidden';
  let light =document.getElementsByClassName('light'); 

  // 写真を押したら、
  light.addEventListerner('click',function(){
    // それがもし当たりだったら、写真が消えて、textが表示される
    if (I == winner){
      light.remove();
      text.style.visibility='visible';
    }else {
      text.style.visibility='hidden';
    }
  })
  
}

































});



















