// 상단 헤더 토글 버튼 기능 만들기

// 1. 변수선언
const toggleBtn = document.querySelector('.toggle'); // 토글버튼
const spans = document.querySelectorAll('.toggle span'); // 라인
const gnb = document.querySelector('.gnb'); // 메인메뉴

let n = 0; // 메뉴 상태값 (0: 닫힘, 1: 열림)

// 2. 토글 버튼 클릭 이벤트 (전체 GNB 열기/닫기)
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
    } else {
        // 메뉴 닫기 & 열려있던 서브메뉴도 초기화
        closeAllSubMenu();
        gnb.classList.remove('active');

        // 토글 버튼 원래 모양으로 변경
        this.classList.remove('active');
        spans[0].classList.remove('act_rotate01');
        spans[1].classList.remove('act_none');
        spans[2].classList.remove('act_rotate02');

        n = 0;
    }
});


// 3. 메인메뉴 클릭 시 해당 서브메뉴 토글 기능
const mainMenuItems = document.querySelectorAll('.gnb > ul > li > a');

mainMenuItems.forEach(item => {
    item.addEventListener('click', function(e) {
        const subMenu = this.nextElementSibling; // 클릭한 a태그의 다음 요소 (ul.sub)

        // 하위 서브메뉴(.sub)가 존재하는 경우에만 동작
        if (subMenu && subMenu.classList.contains('sub')) {
            e.preventDefault(); // href="#" 페이지 상단 이동 및 새로고침 방지

            const isAlreadyOpen = subMenu.classList.contains('active');

            // 1) 다른 모든 서브메뉴 및 화살표 회전 클래스 제거
            closeAllSubMenu();

            // 2) 클릭한 메뉴가 닫혀있었다면 열기 (토글 동작)
            if (!isAlreadyOpen) {
                subMenu.classList.add('active');
                this.classList.add('active'); // 화살표 회전용 클래스
            }
        }
    });
});

// 모든 서브메뉴를 닫아주는 공통 함수
function closeAllSubMenu() {
    const allSubMenus = document.querySelectorAll('.sub');
    const allMainMenuLinks = document.querySelectorAll('.gnb > ul > li > a');

    allSubMenus.forEach(sub => sub.classList.remove('active'));
    allMainMenuLinks.forEach(link => link.classList.remove('active'));
}