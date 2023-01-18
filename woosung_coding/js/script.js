 //1.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//2.슬라이드
$(function() {
    $( '.news .slide' ).slick( {
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
        dots:false
        
    } );
    $( '.socialAttr .social .slideBox .slide' ).slick( {
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        dots:false
    } );
    // $(".visual .slide").slick({ //슬릭플러그인 호출
    //     arrows: false, //화살표 사용안함
    //     dots: true, //닷츠
    //     autoplay: true, //자동재생
    //     fade: true, //페이드인 효과        
    //     autoplaySpeed:4000, //재생시간
    //     pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
    //    pauseOnFocus:false //포커스시 슬라이드 멈춤 해제
    // });
}); 


//.3.scroll 애니메이션
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
    }); 