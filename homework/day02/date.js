// 날짜/시간을 생성하는 함수를 하나 만들고, 해당 함수를 실행하면
// “오늘은 2020년 12월 2일 11:30:29 입니다.”
// 라는 메시지가 콘솔에 출력되도록 만들어 주세요

function getCreatedAt() {
    
    const date = new Date();
    const yyyy = date.getFullYear();
    const MM = date.getMonth() + 1;
    const dd = date.getDate();
    const HH = date.getHours();
    const mm = date.getMinutes();
    const ss = date.getSeconds();

    console.log(`오늘은 ${yyyy}년 ${MM}월 ${dd}일 ${HH}:${mm}:${ss} 입니다`);

}

getCreatedAt();