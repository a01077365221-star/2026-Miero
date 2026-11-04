
//메인 슬라이드 구현하기

//변수선언
const m_img = document.querySelectorAll('#visual_slide > div'); //슬라이드 이미지 변수
const l_btn = document.querySelector('#visual_slide .s_btn > li:first-child'); //슬라이드 좌측버튼 변수
const r_btn = document.querySelector('#visual_slide .s_btn > li:last-child'); //슬라이드 우측버튼 변수
const c_btn = document.querySelectorAll('#visual_slide .ctrl_btn li'); //컨트롤 버튼 변수
const slide_area = document.querySelector('#visual_slide'); //슬라이드 전체 영역 변수


let n = 0; //인덱스값 초기화

//처음 실행시 첫 번째 이미지 보여주기
m_img[n].classList.add('slide_active');
c_btn[n].classList.add('on');

//이미지를 변경하는 공통 함수
function showSlide(){

    m_img.forEach(img=>{
        img.classList.remove('slide_active');
    });

    c_btn.forEach(btn=>{
        btn.classList.remove('on');
    });

    m_img[n].classList.add('slide_active');
    c_btn[n].classList.add('on');
}

//3초마다 반복호출을 위한 자동 슬라이드 함수
function fadeInOut(){

    if(n === m_img.length - 1){
        n = 0;
    }else{
        n++;
    }

    showSlide();
}

//이미지 슬라이드 (좌측버튼 클릭시)
function fadeInOut2(){

    if(n === 0){
        n = m_img.length - 1;
    }else{
        n--;
    }

    showSlide();
}

//매 3초마다 함수를 반복호출하여 실행합니다.
let Timer = setInterval(fadeInOut, 3000);

//슬라이드 영역에 마우스 오버시 자동 슬라이드 정지
slide_area.addEventListener('mouseenter',function(){
    clearInterval(Timer);
});

//슬라이드 영역에서 마우스가 벗어나면 자동 슬라이드 재시작
slide_area.addEventListener('mouseleave',function(){
    clearInterval(Timer);
    Timer = setInterval(fadeInOut, 3000);
});

//컨트롤 버튼 클릭시 해당 이미지 보여주기
c_btn.forEach((btn, idx)=>{
    btn.addEventListener('click',function(){

        n = idx;
        showSlide();

    });
});

//좌측 버튼 클릭시 이전 이미지 보여주기
l_btn.addEventListener('click',function(){
    fadeInOut2();
});

//우측 버튼 클릭시 다음 이미지 보여주기
r_btn.addEventListener('click',function(){
    fadeInOut();
});

//탭콘텐츠 구현하기

//1. 변수선언
const tab_list = document.querySelectorAll('.tcon ul li a');
const tcon = document.querySelectorAll('.tcon ul li div');

//사용자가 탭메뉴를 클릭하면 이벤트가 동작합니다.
tab_list.forEach((tab, i)=>{
    tab.addEventListener('click', (e)=>{
        e.preventDefault();

        //모든 콘텐츠 숨기기
        tcon.forEach((content)=>{
            content.style.display='none';
        });

        //모든 탭메뉴의 t_on 클래스 제거
        tab_list.forEach((t)=>{
            t.classList.remove('t_on');
        });

        //선택한 메뉴에만 t_on 적용
        tcon[i].style.display='block';
        tab_list[i].classList.add('t_on');

        //3번 탭메뉴 클릭시 부모박스의 높이가 변해야 함.
        if(i==2){
        tcon[i].parentElement.parentElement.parentElement.parentElement.style.height='750px';}else{
            tcon[i].parentElement.parentElement.parentElement.parentElement.style.height='600px';
        }
    });
});