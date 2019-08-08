var spW = 768,    // SP max width, not contain
    winW = $(window).width()         // Window width
    winH = $(window).height()         // Window height
    // isSp,         // Is SP or not
    // isChange,     // Is change to pc or sp
    winScrollTop = $(window).scrollTop() // Window scrollTop

function initTop() {
  setBanner();
  initMainSlider();

  $(window).scroll(function(){
    // setNav();
    if(winScrollTop > winH + 100) {
      $('.banner').stop().animate({opacity: 0}, 50);
    } else {
      $('.banner').stop().animate({opacity: 1}, 50);
    }
  }).trigger('scroll');

  $(window).resize(function(){
    setBanner();
  }).trigger('resize');

  $('#btn-down').click(function(){
    var targetOffset = $('#okExhi').offset().top - (isSp ? 30 : 20);
    $('html, body').stop().animate({
      scrollTop: targetOffset
    }, {
      duration: 1000,
      step:function(now, fx){
        if(fx.prop == 'scrollTop') {
          var newTargetOffset = $('#okExhi').offset().top - (isSp ? 30 : 20);
          fx.end = newTargetOffset;
        }
      }
    });
  });

  
}

function setBanner() {
  var h = $(window).height();
  $('.banner, #mainSlider').height(h);
  // if(isiPad) $('#main .banner, #mainSlider').width(1150);
  console.log(h);
  
}

function initMainSlider() {
  var images = [
    '/pic/11-5F唯朵Villa.jpg',
    '/pic/1315x1920.jpg',
    '/pic/14-藍亭.jpg'
  ];

  $(window).one('load' ,function(){
    $('#mainSlider').backstretch(images, {
      speed: 1000,
      fade: 2000,
      before:"before"
    });
  });
}

function before(i){
  if(i==0){
    var lw = $('#mainSlider').height()/20;
    TweenLite.to($(".slide_img0"),0,{scale:1.10,y:lw})
    TweenMax.to($(".slide_img0"),8,{y:-lw,ease:Power0.easeNone})
  } else if(i==1){
    TweenLite.to($(".slide_img1"), 0, {scale:1,ease:Power0.easeNone})
    TweenLite.to($(".slide_img1"), 7, {scale:1.12,ease:Power0.easeNone})
  } else if(i==2){
    var lw = $('#mainSlider').width()/30;
    TweenLite.to($(".slide_img2"),0,{scale:1.05,x:lw})
    TweenMax.to($(".slide_img2"),8,{x:-lw,ease:Power0.easeNone})
  }
}

$(initTop);
$(window).resize(function(){
  setBanner();
  ;
  
})