import puppeteer from "puppeteer";

// puppeteer 는 비동기라서 async-await
async function startCrawling() {

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage(); // 브라우저 열기
    await page.setViewport({ width:1280, height:720 })

    await page.goto("https://www.goodchoice.kr/product/search/2"); // 페이지로 이동(접속)
    await page.waitForTimeout(1000); // 1초

    const stage = await page.$eval("#poduct_list_area > li:nth-child(5) > a > div > div.name > div > span", el => el.textContent);
    const location = await page.$eval("#poduct_list_area > li:nth-child(5) > a > div > div.name > p:nth-child(4)", el => el.textContent);
    const price = await page.$eval("#poduct_list_area > li:nth-child(4) > a > div > div.price > p > b", el => el.textContent);

    console.log(stage);
    console.log(location.trim());
    console.log(price);

    await browser.close(); // 브라우저 닫기
    

}

startCrawling()