import { Order } from "../modals/Order";

export class OrderManager {
    private static instance: OrderManager;
    private orders: Order[] = [];
    private constructor() { }

    public static getInstance(): OrderManager {
        if (!OrderManager.instance) {
            OrderManager.instance = new OrderManager();
        }
        return OrderManager.instance;
    }

    addOrders(order: Order): void {
        this.orders.push(order)
    }
    listOrders(): Order[] {
        return this.orders;
    }
}