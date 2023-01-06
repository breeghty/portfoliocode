//1.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

// //2.슬라이드
// $(function() {
//     $(".visual .slide").slick({ //슬릭플러그인 호출
//         arrows: false, //화살표 사용안함
//         dots: true, //닷츠
//         autoplay: true, //자동재생
//         fade: true, //페이드인 효과        
//         autoplaySpeed:4000, //재생시간
//         pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
//        pauseOnFocus:false //포커스시 슬라이드 멈춤 해제
//     });
// }); 

// swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3, //보여지는 갯수
    spaceBetween: 35, //각각 간격
    centeredSlides: true, //센터모드-active 클래스 붙음.
    loop: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },//루프
    pagination:{
        el: ".swiper-pagination",
        clickable:true,
    
    },
});

//.3.scroll 애니메이션
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
    }); 

//4. 배경색 변경
// $(window).on('scroll resize', function(){
//     var scrollTop = 0;
//     scrollTop = $(document).scrollTop();
//     bgColor();
    
//     function bgColor(){
//         if(scrollTop >1400){
//             $('body').addClass('on');
//         }
//         else{
//             $('body').removeClass('on');
//         }
//         if(scrollTop >2700){
//             $('body').removeClass('on');
//         }

//     }   
// });

//menubar menuopen

$(function(){
    $(".menuBar button.open").on("click", function(){
        $(".menuBar .menuOpen").addClass('on');
        $("nav").css("opacity", 0);
    });
    $(".menuBar .menuOpen .close").on("click", function(){
        $(".menuBar .menuOpen").removeClass('on');
        $("nav").css("opacity", 1);
    });
});

// mainmenu span bar
// $(function(){
//     $(".gnb li a").on("mouseenter focus", function(){
//         var bar = $(this).position().left; //위치값
//         var width = $(this).width();
//         $("span.bar").css({'left': bar + 'px', 'width': width +'px', 'opacity':1});
//     }); 
//     $(".gnb li a").on("mouseleave", function(){
//         $("span.bar").css({'left': 0, 'width': 0, 'opacity':0});
//     });
// });
// // https://foodsexer.tistory.com/67

// //svg
// //길이찾기
// $(function() {
//     $('.svgAni').find('path').each(function( i, path ) {  
//     var length = path.getTotalLength();
//     // alert(length);
//     });
// });