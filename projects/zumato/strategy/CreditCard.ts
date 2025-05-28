import { IPaymentStrategy } from "./IPaymentStrategy";

export class CreditCard implements IPaymentStrategy {
    pay(amount: number): void {
        console.log(`Pay Total amount : ${amount} through CreditCard!`);
    }
}