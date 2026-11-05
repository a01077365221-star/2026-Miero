
// 상단 헤더 토글 버튼 기능 만들기

// 1. 변수선언
const toggleBtn = document.querySelector('.toggle'); // 토글버튼
const spans = document.querySelectorAll('.toggle span'); // 라인
const gnb = document.querySelector('.gnb'); // 메인메뉴

let n = 0; // 메뉴 상태값 (0: 닫힘, 1: 열림)

// 2. 클릭 이벤트
toggleBtn.addEventListener('click', function(){

    if(n === 0){
        // 메뉴 열기
        gnb.classList.add('active');

        // 토글 버튼 X 모양으로 변경
        this.classList.add('active');
        spans[0].classList.add('act_rotate01');
        spans[1].classList.add('act_none');
        spans[2].classList.add('act_rotate02');

        n = 1;

    }else{
        // 메뉴 닫기
        gnb.classList.remove('active');

        // 토글 버튼 원래 모양으로 변경
        this.classList.remove('active');
        spans[0].classList.remove('act_rotate01');
        spans[1].classList.remove('act_none');
        spans[2].classList.remove('act_rotate02');

        n = 0;
    }
});
