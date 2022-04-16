import puppeteer from "puppeteer";

// puppeteer 는 비동기라서 async-await
async function startCrawling() {

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage(); // 브라우저 열기
    await page.setViewport({ width:1280, height:720 })

    await page.goto("https://finance.naver.com/item/sise.naver?code=005930"); // 페이지로 이동(접속)

    // for() { // for 문 반복문으로
    //     await page.waitForTimeout(1000); // 1초
    
    //     const myIframePage = page.frames().find( iframe => iframe.url().includes("/item/sise_time.naver?code=005930&amp;thistime=20220121161127") ); // iframe만 쭉 뽑아와
    
    //     const price = await myIframePage.$eval("body > table.type2 > tbody > tr:nth-child(4) > td:nth-child(2) > span", el => el.textContent);

    // }

        await page.waitForTimeout(1000); // 1초
    
        const myIframePage = page.frames().find( iframe => iframe.url().includes("/item/sise_time.naver?code=005930&amp;thistime=20220121161127") ); // iframe만 쭉 뽑아와
    
        const price = await myIframePage.$eval("body > table.type2 > tbody > tr:nth-child(4) > td:nth-child(2) > span", el => el.textContent);

    console.log(price);

    await browser.close(); // 브라우저 닫기
    

}

startCrawling()