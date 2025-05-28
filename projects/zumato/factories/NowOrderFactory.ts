import { Cart } from "../modals/Cart";
import { MenuItem } from "../modals/MenuItem";
import { Order } from "../modals/Order";
import { User } from "../modals/User";
import { IPaymentStrategy } from "../strategy/IPaymentStrategy";
import { IOrderFactory } from "./IOrderFactory";

export class NowOrderFactory implements IOrderFactory {
    createOrder(id: number, user: User, cart: Cart, items: MenuItem, paymentStrategy: IPaymentStrategy): Order {
        return new Order(id,user,cart,items,paymentStrategy);
    }
}