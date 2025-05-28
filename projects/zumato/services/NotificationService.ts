import { Order } from "../modals/Order";

export class NotificationService {
    private order: Order;
    constructor(order: Order) {
        this.order = order;
    }

    notifyUser(): void {
        console.log(`Order has been placed for ${this.order.getUser().getName()}. Total cost : ${this.order.getCart().totalCost()}`)
        console.log("+===============================================+")
    }
}