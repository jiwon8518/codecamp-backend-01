import { CashService } from "./services/cash.service.js";

export class CouponController {
    constructor(moneySerivce) {
        this.moneySerivce = moneySerivce;
    }

    buyCoupon = (req, res) => {
        // 1. 가진돈 검증하는 코드(10줄 -> 2줄)
       //const moneyService = new CashService();
       const hasMoney = this.moneySerivce.checkValue();
    
        // 2. 쿠폰 구매하는 코드(10줄)
        if(hasMoney) {
            res.send("쿠폰을 구매합니다");
        }
    }
}