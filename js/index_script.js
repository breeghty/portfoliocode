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


// splitting.js
$(function(){
    Splitting();
});

//scroll 애니메이션
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
    }); 

//배경색 변경
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

// personality
const first_text = document.querySelector('.first_text');
const second_text = document.querySelector('.second_text');
const third_text = document.querySelector('.third_text');


const text1 = 'Passionate Growing Receptive Challenging'.split(' ');
// 문자열을 split 메소드를 이용해 나눠준다. 스페이스바를 기준으로 단어 네개가 나눠지고 text1 배열이 생성된다.
// text1=['passionate', 'Growing', 'Receptive', 'Challengin']
const text2 = 'Cooperative Flexible Adaptive Positive'.split(' ');
const text3 = 'Diligent Calm Voluntary Planning'.split(' ');

// for(let i = 0; i < text1.length ; i++){
//     console.log(text1[i]);
// }

function initText(e, array){
    array.push(...array)
    array.push(...array)
    // 스크롤시 단어가 이어지면서 나와야 하므로 ...array를 이용해 배열의 단어를 한 번 더 넣어준다.
    // console.log(array);
    for(let i = 0; i<array.length; i++){
        e.innerText += `${array[i]}\u00A0\u00A0\u00A0\u00A0`;
    }
}
// innerText => 요소 내부의 텍스트를 나타내는 메소드.

initText(first_text, text1);
initText(second_text, text2);
initText(third_text, text3);


// 전역변수
let count1 = 0;
let count2 = 0;
let count3 = 0;


function marqueeText(count, element, dir){
    if(count > element.scrollWidth / 2){
        element.style.transform = 'translate3d(0,0,0)';
        count=0;
    }
    element.style.transform = `translate3d(${dir * count}px, 0, 0)`;
    // x축 방향으로 count * direction 만큼 이동. direction이 양수면 오른쪽, 음수면 왼쪽으로 이동한다.
    
    return count
}

function animate(){
    // 반응형에 따라 텍스트 애니메이션 속도 다르게 하기.
    let mediaSize = window.matchMedia('(max-width: 1000px)');
    if(mediaSize.matches == true){
        // 1000px이하의 경우
        count1++;
        count2++;
        count3++;
    } else{
        count1+=2;
        count2+=2;
        count3+=2;
    }

    // ccount를 통해 속도 조절. count를 계속 up 시키다가 marqueeText 함수를 통해 초기화.
    //애니메이션 무한 반복.

    count1 = marqueeText(count1, first_text, -1);
    count2 = marqueeText(count2, second_text, 1);
    count3 = marqueeText(count3, third_text, -1);

    window.requestAnimationFrame(animate);
    
    // 애니메이션의 현재상태를 업데이트하는 메소드.
}

animate();

function scrollMarquee(){

    let mediaSize = window.matchMedia('(max-width: 1000px)');
    if(mediaSize.matches == true){
        count1+=5;
        count2+=5;
        count3+=5;
    } else{
        count1+=10;
        count2+=10;
        count3+=10;
    }
}

window.addEventListener('scroll', scrollMarquee);




//menubar menuopen, nav 사라짐
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


// div. skill
const iconList = document.querySelectorAll(".topList > li, .bottomList > li"); 
        // alert(iconList.length);
const skill = document.getElementById('skill_title');
        // alert(iconList[1]); object html element
        // 버튼에 마우스를 올릴 때 mouseenter
        for(let i = 0; i< iconList.length; i++){
            iconList[i].querySelector(".btn").addEventListener("mouseenter", function(){
                for(let j = 0; j < iconList.length; j++){
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

// class bgc => bg color change
gsap.utils.toArray(".container").forEach(function(bg){
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
            duration:1,
        //onEneterBack - 스크롤의 위치가 "끝"을 지나 뒤로 이동할 때.
        }),
        onLeaveBack: () => gsap.to(".wrap", {
            backgroundColor:"#fff",
            duration:1,
        }),
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
    end: "+=1800",
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
    // function
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
    // function
});
//DOM(document Object Model)객체, addEventListener(이벤트명, 실행할 함수, 옵션);

function setActive(link){
    const navList = document.querySelector(".nav");
    //nav a에 스크롤 위치에 따라 혹은 클릭했을 때 active클래스를 붙여주는 함수.
    links.forEach(a => a.classList.remove("active"));
    link.classList.add("active");

    // nav가 보이지 않게 하는 코드
    if((link.classList.contains('active')) && (link.classList.contains('invisible'))){
        // alert("푸터입니다.");
        navList.classList.add("notshow");
    }
    else{
        navList.classList.remove("notshow");
    }

}









