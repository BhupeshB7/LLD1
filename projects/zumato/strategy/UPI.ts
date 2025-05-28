import { IPaymentStrategy } from "./IPaymentStrategy";

export class UPI implements IPaymentStrategy {
    pay(amount: number): void {
        console.log(`Pay Total amount : ${amount} through UPI!`);
    }
}