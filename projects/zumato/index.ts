// index.ts
import { NowOrderFactory } from "./factories/NowOrderFactory";
import { ScheduleOrderFactory } from "./factories/ScheduleOrderFactory";
import { OrderManager } from "./managers/OrderManager";
import { RestaurantManager } from "./managers/RestaurantManager";
import { Cart } from "./modals/Cart";
import { MenuItem } from "./modals/MenuItem";
import { Restaurant } from "./modals/Restaurant";
import { User } from "./modals/User";
import { Zumato } from "./orchestration/Zumato";
import { NotificationService } from "./services/NotificationService";
import { CreditCard } from "./strategy/CreditCard";
import { UPI } from "./strategy/UPI";

// Initialize main orchestrators
const zumato = new Zumato();
const orderManager = OrderManager.getInstance();
const restaurantManager = RestaurantManager.getInstance();

// Create Menu Items
const burger = new MenuItem("B1", "Burger", 120);
const fries = new MenuItem("F1", "Fries", 60);

// Create Restaurants
const mcDonlads = new Restaurant(1, "McDonlads", "North", [burger, fries]);
const kfc = new Restaurant(2, "KFC", "South", [burger, fries]);
restaurantManager.addRestaurants(mcDonlads);
restaurantManager.addRestaurants(kfc);
zumato.registerRestaurant(mcDonlads);
zumato.registerRestaurant(kfc);

// Create separate carts per user
const cart = new Cart(mcDonlads, [burger, fries]);
cart.addToCart(burger);
 
const cart1 = new Cart(kfc, [burger, fries]);
cart1.addToCart(fries);

// Create Users
const user = new User(101, "Bhupesh", "BITS Pilani", cart);
const user1 = new User(102, "Rahul", "VIT", cart1);
zumato.registerUser(user);
zumato.registerUser(user1);

// Create Orders
const paymentStrategy1 = new UPI();
const paymentStrategy2 = new CreditCard();

const nowOrderFactory = new NowOrderFactory();
const scheduleOrderFactory = new ScheduleOrderFactory("12:00");

const order1 = nowOrderFactory.createOrder(1, user, cart, burger, paymentStrategy1);
order1.processPayment();
orderManager.addOrders(order1);
const notification1 = new NotificationService(order1);
notification1.notifyUser();

const order2 = scheduleOrderFactory.createOrder(2, user1, cart1, fries, paymentStrategy2);
order2.processPayment();
orderManager.addOrders(order2);
const notification2 = new NotificationService(order2);
notification2.notifyUser();

// Display all orders
console.log("+------------------------------+");
console.log(orderManager.listOrders());
console.log("+------------------------------+");