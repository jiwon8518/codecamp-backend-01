import express from "express";
import { ProductController } from "./mvc/controllers/product.controller.js";
import { CouponController } from "./mvc/controllers/coupon.controller.js";
import { ProductService } from "./mvc/controllers/services/product.service.js";
import { CashService } from "./mvc/controllers/services/cash.service.js";
import { PointService } from "./mvc/controllers/services/point.service.js";


const app = express();

const productService = new ProductService();
const moneySerivce1 = new CashService(); // new 한번으로 모든 곳에서 사용 가능(싱글톤패턴)
const moneySerivce2 = new PointService(); // 포인트 결제 추가


// 상품 API
const productController = new ProductController(productService, moneySerivce1);
app.post('/products/buy', productController.buyProduct); // buyProduct에서 함수() 를 붙여주면 실행되기떄문에 () 빼주기
app.post('/products/refund', productController.refundProduct);

// 쿠폰 API
const couponController = new CouponController(moneySerivce2);
app.post('/coupon/buy', couponController.buyCoupon);


app.listen(3000);