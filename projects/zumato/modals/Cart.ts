import { MenuItem } from "./MenuItem";
import { Restaurant } from "./Restaurant";

export class Cart {
    private restaurant: Restaurant;
    private menuItems: MenuItem[] = [];
    constructor(restaurant: Restaurant, menuItems: MenuItem[]) {
        this.restaurant = restaurant;
        this.menuItems = [];
    }
    addToCart(menuItem: MenuItem) {
        this.menuItems.push(menuItem);
    }
    isCartEmpty(): boolean {
        if (this.menuItems.length === 0) {
            return true;
        } else return false;
    }
    getItems(): MenuItem[] {
        return this.menuItems;
    }

    getRestaurant(): Restaurant {
        return this.restaurant;
    }
    totalCost(): number {
        return this.menuItems.reduce((acc, item) => acc + item.getPrice(), 0)
    }
}