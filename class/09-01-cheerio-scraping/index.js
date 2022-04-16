import axios from "axios";
import cheerio from "cheerio";


async function getOpenGraph(mydata) {

    const myaddress = mydata.contents.split(" ").filter( (el) => el.include("http")); // map(), forEach(), filter() 메서드로 사용가능
    // filter 로 요소 순회하면서 http 가 들어간 요소 찾아라

    const html = await axios.get(myaddress[0]); // myaddress 의 0번째
    const $ = cheerio.load(html.data); // cheerio 로 불러오기
    $("meta").each( (_, el) => {  // cheerio의 내장함수인 each()

        // if문 방법1
        // if($(el).attr('property')){
        //     const key = $(el).attr('property').split(":")[1] // og:title
        //     console.log(key);
        // }

        // 방법2
        const key = $(el).attr('property')?.split(":")[1] // og:title ? 앞에 조건이 해당되면 있으면 실행 없으면 실행X
        
        // Key 가 있을떄만 실행해줘
        if(key) {
            const value = $(el).attr("content");
            console.log(key, value);
        }
        



    }) 
    // console.log(html);
 
}

const mydata = {
    title: "안녕하세요~",
    content: "여기여기용 https://naver.com"
}

getOpenGraph(mydata);