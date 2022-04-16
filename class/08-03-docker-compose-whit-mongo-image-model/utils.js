export function getCreatedAt() {
    // 오늘 날짜
    const aaa = new Date();
    const yyyy = aaa.getFullYear();
    const MM = aaa.getMonth() + 1; // month 는 0부터 시작하기 때문에 +1 해줘야함
    const dd = aaa.getDate(); // getDay 는 요일

    return `${yyyy}-${MM}-${dd}`
    
}