import express from "express";
import { ProductController } from "./mvc/controllers/product.controller.js";
import { CouponController } from "./mvc/controllers/coupon.controller.js";


const app = express();



// 상품 API

const productController = new ProductController();
app.post('/products/buy', productController.buyProduct); // buyProduct에서 함수() 를 붙여주면 실행되기떄문에 () 빼주기
app.post('/products/refund', productController.refundProduct);

// 쿠폰 API
const couponController = new CouponController();
app.post('/coupon/buy', couponController.buyCoupon);


app.listen(3000);