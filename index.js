$(function(){

  const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });

  

  animateCSS('.title','bounce');


  var is_clicked = false;//←クリックされているかどうかの変数にいいえ（false）を入れておく
  //'.title'というクラスの物体をクリックすると
  $('.hyouji_henkou_button').click(function(){
    if (is_clicked == false){
      $('body').css('background-color','yellow');//←bodyの背景色を変える
      is_clicked = true;//←クリックされている＝「はい」に変更
    }else{
      $('body').css('background-color','');//背景色をもとに戻す
      is_clicked = false;//is_clickedの変数に「いいえ」を代入
    }
    
  });


  $('.img').click(function(){
    $(this).css("width","400px");
  });



});

