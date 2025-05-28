import { Restaurant } from "../modals/Restaurant";
import { User } from "../modals/User";

export class Zumato {
    private users: User[] = [];
    private restaurants: Restaurant[] = [];

    registerRestaurant(restaurant: Restaurant) {
        this.restaurants.push(restaurant);
    }
    registerUser(user: User) {
        this.users.push(user);
    }
    getUser(): User[] {
        return this.users;
    }
    getRestaurants(): Restaurant[] {
        return this.restaurants;
    }
}