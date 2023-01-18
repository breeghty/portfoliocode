//  1.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//2.슬라이드
$(function() {
    $(".visual .slide").slick({ //슬릭플러그인 호출
        arrows: true, //화살표 사용안함
        dots: true, //닷츠
        autoplay: true, //자동재생
        fade: true, //페이드인 효과        
        autoplaySpeed: 4000, //재생시간
        pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
       pauseOnFocus:false //포커스시 슬라이드 멈춤 해제
    });
}); 


// $( function() {
//     $( '.notice .inner .bottomBox' ).slick( {
//         autoplay: true,
//         autoplaySpeed: 2000,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         arrows:true,
//         dots:true
//     } );
// } );


//.3.scroll 애니메이션
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: true //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 


 // button click시 경고문구 
$(function(){
    $('nav li:eq(0)').click(function(){
        alert("준비중인 페이지입니다.");
    })
    $('nav li:eq(2)').click(function(){
        alert("준비중인 사이트입니다.");
    })
});

// function alarm(){
//     return alert("준비중인 페이지 입니다.");
// }