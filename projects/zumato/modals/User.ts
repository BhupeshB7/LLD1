import { Cart } from "./Cart";
export class User {
    private id: number;
    private name: string;
    private address: string;
    private cart: Cart;
    constructor(id: number, name: string, address: string, cart: Cart) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.cart = cart;
    }
    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getAddress(): string {
        return this.address;
    }
    getCart(): Cart {
        return this.cart;
    }

    setCart(cart: Cart): void {
        this.cart = cart;
    }

    setName(name: string): void {
        this.name = name;
    }

    setAddress(address: string): void {
        this.address = address;
    }

    setId(id: number): void {
        this.id = id;
    }
}
