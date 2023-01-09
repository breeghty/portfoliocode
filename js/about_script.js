// menu open
$(function(){
    $(".menuBar button.open").on("click", function(){
    $(".menuBar .menuOpen").addClass('on');
});
    $(".menuBar .menuOpen .close").on("click", function(){
    $(".menuBar .menuOpen").removeClass('on');
});
});
//comment slick
$(function() {
    $( '.comment .inner .txtBox .slide' ).slick( {
        arrows: true,
        dots:false,
        autoplay:true,
        fade:true,
        autoplaySpeed:5000,
        pauseOnHover:true,
        pauseOnFocus:true
        
    } );
} );
    // Scroll Trigger
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// nav 내비게이션 스크롤 이동과 a에 active 클래스 주기
//05. nav 내비게이션 스크롤이동과 a에 active 클래스 주기
let links = gsap.utils.toArray("nav a");

links.forEach(a => {
    let href = document.querySelector (a.getAttribute("href"))//nav a 의 href에 section id 값 저장
    linkST = ScrollTrigger.create({
        trigger: href,
        start: 'top 20%',
        // markers:true,
    });

        ScrollTrigger.create({
        trigger: href,
        start: 'top center',
        end:'bottom center',
        onToggle: self => self.isActive && setActive(a)
    });
});

/* onToggle: 스크롤의 위치가 어느방향으로든 '시작'또는 '종료'를 지나 이동할 때 
    setActive 함수 실행.

- isAcitve는 현재 애니메이션의 활성상태를 나타내므로, return이 활성되면 true
-self의 window 객체를 나타냄.
- setActive(a)는 요소(a)를 현재 문서의 활성요소로 세팅
- => 화살표 함수. ES6의 함수 선언 문법
- 결과적으로 변수 'href'의 top과 window의 center가 만나면 윈도 스크롤이 a링크로 부드럽게 스크롤
*/

a.addEvenListener("click", e => {
    e.preventDefault();
    gsap.to(window, {duration:0.8, scrollTo: linkST.start});
});
//DOM(document Object Model)객체, addEventListener(이벤트명, 실행할 함수, 옵션);

function setActive(link){
    //nav a에 스크롤 위치에 따라 혹은 클릭했을 때 active클래스를 붙여주는 함수.
    links.forEach(a => a.classList.remove("active"));
    link.classList.add("active");
}