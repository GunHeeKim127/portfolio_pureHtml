$(function(){  
    var wrapper = $("#totalScreen"),
        $menu = $("#hC"),
        $window = $(window);
    $menu.on("click","a", function(){
        var $this = $(this),
            href = $this.attr("href"),
            top = $(href).offset().top;
        var topY=top-80;
        window.scrollTo(0,topY)
       return false;
    });
});


var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
// 스크롤시에 사용자가 스크롤했다는 것을 알림 
$(window).scroll(function(event){
    didScroll = true;
});

// hasScrolled()를 실행하고 didScroll 상태를 재설정
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
  // 동작을 구현
  //접근하기 쉽게 현재 스크롤의 위치를 저장한다.
  var st = $(this).scrollTop();
  //설정한 delta 값보다 더 스크롤되었는지를 확인한다.
  if (Math.abs(lastScrollTop - st) <= delta)
    return;
    //스크롤 위치가 0보다 클때
  if(st>0){
    document.getElementsByTagName('header')[0].style.backgroundColor="white";
    document.getElementById('headerContainer').style.boxShadow="0 1px rgba(235,235,235,1)";
  }
  //스크롤 위치가 0일때
  else if(st===0){
    document.getElementsByTagName('header')[0].style.backgroundColor="transparent";
    document.getElementById('headerContainer').style.boxShadow="0 0px rgba(235,235,235,1)";
  }
    lastScrollTop = st;
}