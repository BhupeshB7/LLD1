import { Restaurant } from "../modals/Restaurant";

export class RestaurantManager {
    private static instance: RestaurantManager;
    private restaurants: Restaurant[] = [];

     public static getInstance(): RestaurantManager {
        if (!RestaurantManager.instance) {
            RestaurantManager.instance = new RestaurantManager();
        }
        return RestaurantManager.instance;
    }

    addRestaurants(restaurant: Restaurant): void {
        this.restaurants.push(restaurant);
    }

    getRestaurantByLocation(loc: string): Restaurant[] {
        return this.restaurants.filter((locationName) => locationName.getLocation().includes(loc))
    }
}