$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});


// swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, //보여지는 갯수
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
    breakpoints:{
        //767px보다 클 경우
        767:{
            slidesPerView:3,
            spaceBetween: 35,
        }
    }
});



//scroll 애니메이션
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


// div. skill
const iconList = document.querySelectorAll(".topList > li, .bottomList > li"); 
        // alert(iconList.length);
const skill = document.getElementById('skill_title');
        // alert(iconList[1]); object html element

        // 버튼에 마우스를 올릴 때 mouseenter
        for(let i = 0; i< iconList.length; i++){
            iconList[i].querySelector(".btn").addEventListener("mouseenter", function(){
                for(var j = 0; j < iconList.length; j++){
                    //on 클래스가 붙었던 li의 on 클래스를 모두 지워준다.
                    iconList[j].classList.remove('on');
                }
                this.parentNode.classList.add('on');
                //skill title을 가린다.
                skill.style.opacity=0;
                //a태그의 부모노드인 li에 클래스 on을 붙인다.
            });
        } 
        // 버튼에 focus 할때
        for(let i = 0; i< iconList.length; i++){
            iconList[i].querySelector(".btn").addEventListener("focus", function(){
                for(var j = 0; j < iconList.length; j++){
                    iconList[j].classList.remove('on');
                }
                this.parentNode.classList.add('on');
                skill.style.opacity=0;
                //a태그의 부모노드인 li에 클래스 on을 붙인다.
            });
        } 
        //mouseleave시 skill 타이틀이 다시 나타남
        for(let i = 0; i< iconList.length; i++){
            iconList[i].querySelector(".btn").addEventListener("mouseleave", function(){
                for(var j = 0; j < iconList.length; j++){
                    iconList[j].classList.remove('on');
                }
                this.parentNode.classList.remove('on');
                skill.style.opacity=1;
                //a태그의 부모노드인 li에 클래스 on을 붙인다.
            });
        } 
        //blur : focus를 잃을 때
        for(let i = 0; i< iconList.length; i++){
            iconList[i].querySelector(".btn").addEventListener("blur", function(){
                for(var j = 0; j < iconList.length; j++){
                    iconList[j].classList.remove('on');
                }
                this.parentNode.classList.remove('on');
                skill.style.opacity=1;
                //a태그의 부모노드인 li에 클래스 on을 붙인다.
            });
        } 

    //숫자 카운트업하기.
    let num_arr = [90, 88, 25, 30, 50, 20, 80, 80, 85, 50, 90];
    const countList = document.querySelectorAll('.cont');
    $(function(){
        //pc모드
        let i = 0;
        $(".btn").on("click mouseenter focus", function(){
            i = $(".btn").index(this);
            //class ="btn"중에서 내가 이벤트를 작동시킨 것의 인덱스가 할당된다.
            // alert(i);
            $(".cont").eq(i).animate({val : num_arr[i]},{
                        duration: 1300,
                        step : function(){
                        $(".cont").eq(i).text(Math.floor(this.val));
                    },//count up 애니메이션 진행
                    complete: function(){
                        $(".cont").eq(i).text(Math.floor(this.val));
                    }
            });
        });
        //table, movile 767px 이하
        //추가: skill일 때 숫자 올라가도록 하기
        for(let k = 0; k < num_arr.length;k++){
            $(".count").eq(k).animate({val : num_arr[k]},{
                duration: 1300,
                step : function(){
                $(".count").eq(k).text(Math.floor(this.val));
            },//count up 애니메이션 진행
            complete: function(){
                $(".count").eq(k).text(Math.floor(this.val));
            }
    });
            // $(".count").eq(k).text(num_arr[k]);
        }
        
    });
    
//project gallery_마우스 오버시 이미지 변경
$(document).ready(function(){
    
    $('.crew').mouseover(function(){
        $(this).attr('src','img/crewColor.png');
    }).mouseout(function(){
        $(this).attr('src','img/crewBlack.png');
    });

    $('.daebang').mouseover(function(){
        $(this).attr('src','img/daebangColor.png');
    }).mouseout(function(){
        $(this).attr('src','img/daebangBlack.png');
    });

    $('.musign').mouseover(function(){
        $(this).attr('src','img/musignColor.png');
    }).mouseout(function(){
        $(this).attr('src','img/musignBlack.png');
    });

    $('.ystudio').mouseover(function(){
        $(this).attr('src','img/ystudioColor.png');
    }).mouseout(function(){
        $(this).attr('src','img/ystudioBlack.png');
    });

    $('.phomein').mouseover(function(){
        $(this).attr('src','img/phomeinColor.png');
    }).mouseout(function(){
        $(this).attr('src','img/phomeinBlack.png');
    });

    $('.dopda').mouseover(function(){
        $(this).attr('src','img/dopdaColor.png');
    }).mouseout(function(){
        $(this).attr('src','img/dopdaBlack.png');
    });

    $('.doctors').mouseover(function(){
        $(this).attr('src','img/doctorsColor.png');
    }).mouseout(function(){
        $(this).attr('src','img/doctorsBlack.png');
    });

    $('.innere').mouseover(function(){
        $(this).attr('src','img/innereColor.png');
    }).mouseout(function(){
        $(this).attr('src','img/innereBlack.png');
    });

    $('.hanhwa').mouseover(function(){
        $(this).attr('src','img/hanhwaColor.png');
    }).mouseout(function(){
        $(this).attr('src','img/hanhwaBlack.png');
    });

    $('.ajou').mouseover(function(){
        $(this).attr('src','img/ajouColor.png');
    }).mouseout(function(){
        $(this).attr('src','img/ajouBlack.png');
    });

    $('.woosung').mouseover(function(){
        $(this).attr('src','img/woosungColor.png');
    }).mouseout(function(){
        $(this).attr('src','img/woosungBlack.png');
    });

});

// section project gallery bg color change
gsap.utils.toArray("section").forEach(function(bg){
    var color = bg.getAttribute('data-color');

    ScrollTrigger.create({
        trigger: bg,
        start: 'top center',
        end:'bottom center',
        // markers:true,
        scrub:true,
        onEnter:()=> gsap.to(".wrap", {
            backgroundColor: color,
            duration: 1,
//onEnter - 스크롤 위치가 '시작'을 지나 앞으로 이동할 때
        }),
        onEnterBack: () => gsap.to(".wrap",{
            backgroundColor:color,
            duration:1 
        //onEneterBack - 스크롤의 위치가 "끝"을 지나 뒤로 이동할 때.
        }),
        onLeaveBack: () => gsap.to(".wrap", {
            backgroundColor:'#d14244',
            duration:1,
        })
    });
});

// section project gallery 가로스크롤
gsap.registerPlugin(ScrollTrigger);

let list = gsap.utils.toArray(".container .gal");
let scrollX = gsap.to(list,{
    xPercent: -100 * (list.length - 1),
    ease: "none",
    scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    end: "+=2000",
    }
});




    // Scroll Trigger
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// nav 내비게이션 스크롤 이동과 a에 active 클래스 주기
let links = gsap.utils.toArray("nav a");

links.forEach(a => {
    let href = document.querySelector (a.getAttribute("href"))//nav a 의 href에 section id 값 저장
    linkST = ScrollTrigger.create({
        trigger: href,
        start: 'top 18%',
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


