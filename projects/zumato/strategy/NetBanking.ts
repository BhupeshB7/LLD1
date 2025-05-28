import { IPaymentStrategy } from "./IPaymentStrategy";

export class NetBanking implements IPaymentStrategy {
    pay(amount: number): void {
        console.log(`Pay Total amount : ${amount} through Net Banking !`)
    }
}