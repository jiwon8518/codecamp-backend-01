import express from "express";
import { CashService } from "./cash.js";
import { ProductService } from "./product.js";

// product.js, cash.js 로 이동 import-export 해주기
// // 클래스는 대문자로
// // new 는 소문자로
// class ProductService {

//     checkSoldout = () => {
//         // 2. 판매여부 검증하는 코드(10줄)
//         // ...
//         // ...
//         // ...
//         // ...
//         // ...
//     }


// }

// class CashService {

//     // 현금체크
//     checkValue = () => {
//         // 1. 가진 돈을 검증하는 코드(10줄)
//         // ...
//         // ...
//         // ...
//         // ...
//         // ...
//         // ...
//     }

// }





const app = express();

// 상품 구매하기 API
// req 요청내용이 담겨져 있음, res 응답주는 -> http 통신
app.post('/products/buy', (req, res) => { 

        // 1. 가진 돈을 검증하는 코드(10줄 -> 2줄)
        const cashService = new CashService();
        const hasMoney = cashService.checkValue();

        // 2. 판매여부 검증하는 코드(10줄 -> 2줄) 일종의 퍼사드패턴이라고 볼수 있음
        const productService = new ProductService();
        const isSoldout = productService.checkSoldout(); // 가지고 있는지 아닌지 is 붙여서 변수명 만들어줌

        // 3. 상품 구매하는 코드
        // 돈이 있으면서 판매중일때
        if(hasMoney && !isSoldout) {
            res.send("상품을 구매합니다.");
        }

});


// 상품 환불하기 API
// 돈 결제는 전부 등록post, 수정은 안됨 중간값들을 몰라 문제가 되기 때문에
app.post('/products/refund', (req, res) => {

    // 1. 판매여부 검증하는 코드(10줄 -> 2줄)
    const productService = new ProductService();
    const isSoldout = productService.checkSoldout();
    
    // 2. 상품 환불하는 코드(10줄 -> 2줄)
    if(isSoldout) {
        res.send("상품을 환불합니다");
    }

});


app.listen(3000);