import { Cart } from "../modals/Cart";
import { MenuItem } from "../modals/MenuItem";
import { Order } from "../modals/Order";
import { User } from "../modals/User";
import { IPaymentStrategy } from "../strategy/IPaymentStrategy";
import { IOrderFactory } from "./IOrderFactory";

export class ScheduleOrderFactory implements IOrderFactory {
    private scheduleTime: string;
    constructor(scheduleTime: string) {
        this.scheduleTime = scheduleTime;
    }
    createOrder(id: number, user: User, cart: Cart, items: MenuItem, paymentStrategy: IPaymentStrategy): Order {
        console.log(`Schedule Order created at ${this.scheduleTime} for user name : ${user.getName()}`);
        return new Order(id, user, cart, items, paymentStrategy)
    }
}