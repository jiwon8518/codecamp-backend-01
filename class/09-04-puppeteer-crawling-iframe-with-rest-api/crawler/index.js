import puppeteer from "puppeteer";
import { Stock } from "./models/stock.model.js";
import mongoose from 'mongoose';
mongoose.connect("mongodb://localhost:27017/codecamp")

// puppeteer 는 비동기라서 async-await
async function startCrawling() {

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage(); // 브라우저 열기
    await page.setViewport({ width:1280, height:720 })

    await page.goto("https://finance.naver.com/item/sise.naver?code=005930"); // 페이지로 이동(접속)
    
    for(let i = 3; i <= 7; i++) { // for 문 반복문으로
        await page.waitForTimeout(3000); // 1초
        // myIframePage.$eval("body > table.type2 > tbody > tr:nth-child(3) > td:nth-child(1) > span", el => el.textContent);
        // body > table.type2 > tbody > tr:nth-child(3) > td:nth-child(1) > span
        const myIframePage = page.frames().find( iframe => iframe.url().includes("/item/sise_day.naver?code=005930") ); // iframe만 쭉 뽑아와
        const mydate = await myIframePage.$eval(`body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(1) > span`, el => el.textContent);
        const myPrice = await myIframePage.$eval(`body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(2) > span`, el => el.textContent);
        console.log(mydate)
        const stock = new Stock ({
                            name: "삼성전자",
                            date: mydate,
                            price: Number(myPrice.replace (",",""))
                        })

        await stock.save();
        console.log(`날짜: ${mydate}, 가격: ${myPrice}`);

     }


    console.log(price);

    await browser.close(); // 브라우저 닫기
    

}

startCrawling()