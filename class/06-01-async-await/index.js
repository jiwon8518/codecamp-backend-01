import axios from "axios";

// 비동기
function fetchPost() {
    const result = axios.get('http://koreanjson.com/posts/1');
    console.log(result); // 결과값 - Promise { <pending> }
}

// 동기 async - await
async function fetchPost2() {
    const result = await axios.get('http://koreanjson.com/posts/1');
    console.log(result.data); // 실제데이터 받아오기
}

// fetchPost();
fetchPost2();