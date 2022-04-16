import express from "express";

const app = express();

// 상품 구매하기 API
// req 요청내용이 담겨져 있음, res 응답주는 -> http 통신
app.post('/products/buy', (req, res) => { 

        // 1. 가진 돈을 검증하는 코드(10줄)
        // ...
        // ...
        // ...
        // ...
        // ...
        // ...

        // 2. 판매여부 검증하는 코드(10줄)
        // ...
        // ...
        // ...
        // ...
        // ...

        // 3. 상품 구매하는 코드
        // if(돈있음 && 판매중) {
        // ...
        // ...
        // ...
        // ...
        //     res.send("상품을 구매합니다.");
        // }

});


// 상품 환불하기 API
// 돈 결제는 전부 등록post, 수정은 안됨 중간값들을 몰라 문제가 되기 때문에
app.post('/products/refund', (req, res) => {

    // 1. 판매여부 검증하는 코드(10줄)
    // ...
    // ...
    // ...
    // ...
    
    // 2. 상품 환불하는 코드(10줄)
    // if(!판매중) {
    // ...
    // ...
    //     res.send("상품을 환불합니다");
    // }

});


app.listen(3000);