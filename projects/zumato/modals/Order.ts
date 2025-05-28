import { IPaymentStrategy } from "../strategy/IPaymentStrategy";
import { Cart } from "./Cart";
import { MenuItem } from "./MenuItem";
import { User } from "./User";

export class Order {
    private id: number;
    private user: User;
    private cart: Cart;
    private menu: MenuItem;
    private paymentStrategy: IPaymentStrategy;
    constructor(id: number, user: User, cart: Cart, menu: MenuItem, paymentStrategy: IPaymentStrategy) {
        this.id = id;
        this.user = user;
        this.cart = cart;
        this.menu = menu;
        this.paymentStrategy = paymentStrategy;
    }
    getId(): number {
        return this.id;
    }

    getUser(): User {
        return this.user;
    }

    getCart(): Cart {
        return this.cart;
    }

    getMenu(): MenuItem {
        return this.menu;
    }

    getPaymentStrategy(): IPaymentStrategy {
        return this.paymentStrategy;
    }
    getType(): string {
        return "Order";
    }
    setPaymentStrategy(): IPaymentStrategy {
        return this.paymentStrategy;
    }

    processPayment(): void {
        this.paymentStrategy.pay(this.menu.getPrice())
    }
}