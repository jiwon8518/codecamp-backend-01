import express from "express";
import { ProductController } from "./mvc/controllers/product.controller/js";


const app = express();

// product.controller.js 으로 이동 import-export 해주기
// class ProductController {

//     // 함수는 하나의 기능만 가능하게 만들도록
//     buyProduct = (req, res) => { 

//         // 1. 가진 돈을 검증하는 코드(10줄 -> 2줄)
//         const cashService = new CashService();
//         const hasMoney = cashService.checkValue();

//         // 2. 판매여부 검증하는 코드(10줄 -> 2줄) 일종의 퍼사드패턴이라고 볼수 있음
//         const productService = new ProductService();
//         const isSoldout = productService.checkSoldout(); // 가지고 있는지 아닌지 is 붙여서 변수명 만들어줌

//         // 3. 상품 구매하는 코드
//         // 돈이 있으면서 판매중일때
//         if(hasMoney && !isSoldout) {
//             res.send("상품을 구매합니다.");
//         }
//     }

//     refundProduct = (req, res) => {

//         // 1. 판매여부 검증하는 코드(10줄 -> 2줄)
//         const productService = new ProductService();
//         const isSoldout = productService.checkSoldout();
        
//         // 2. 상품 환불하는 코드(10줄 -> 2줄)
//         if(isSoldout) {
//             res.send("상품을 환불합니다");
//         }
    
//     }

// }









// 상품 API

const productController = new ProductController();
app.post('/products/buy', productController.buyProduct); // buyProduct에서 함수() 를 붙여주면 실행되기떄문에 () 빼주기
app.post('/products/refund', productController.refundProduct);

// 쿠폰 API


app.listen(3000);