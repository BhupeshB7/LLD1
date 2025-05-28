export class MenuItem {
    private code: string;
    private name: string;
    private price: number;
    constructor(code: string, name: string, price: number) {
        this.code = code;
        this.name = name;
        this.price = price;
    }
    getCode(): string {
        return this.code;
    }
    getName(): string {
        return this.name;
    }
    getPrice(): number {
        return this.price;
    }
    setCode(code: string): void {
        this.code = code;
    }
    setName(name: string): void {
        this.name = name;
    }
    setPrice(price: number) {
        this.price = price;
    }
}