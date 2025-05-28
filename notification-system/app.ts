class Message {
    constructor(public subject: string, public body: string) { }

    getBody(): string {
        return this.body;
    }
}
class User {
    private preferences: string[] = [];
    constructor(public name: string, public email: string, public phone: string, preferences: string[] = []) {
        this.preferences = preferences;
    }
    getPreferences(): string[] {
        return this.preferences;
    }

}
interface NotificationStrategy {
    send(user: User, msg: Message): void;
}

class EmailStrategy implements NotificationStrategy {
    send(user: User, msg: Message) {
        console.log(`Sending Email to ${user.email} : subject : ${msg.subject}, body : ${msg.body}`)
    }
}

class SMSStrategy implements NotificationStrategy {
    send(user: User, msg: Message) {
        console.log(`Sending sms to ${user.phone} , message :${msg.body}`)
    }
}

class PushNotificationStrategy implements NotificationStrategy {
    send(user: User, msg: Message) {
        console.log(`Sending Push notification to ${user.name}, message : ${msg.body}`)
    }
}

class WhatsAppStrategy implements NotificationStrategy {
    send(user: User, msg: Message) {
        console.log(`Sending WhatsApp Notification to ${user.phone}, message: ${msg.body}`)
    }
}

class NotificationFactory {
    private static strategies: { [key: string]: new () => NotificationStrategy } = {};

    static register(type: string, strategy: new () => NotificationStrategy) {
        NotificationFactory.strategies[type.toLowerCase()] = strategy;
    }

    static create(type: string): NotificationStrategy {
        const StrategyClass = NotificationFactory.strategies[type.toLowerCase()];
        if (!StrategyClass) {
            throw new Error(`Unknown notification type: ${type}`);
        }
        return new StrategyClass();
    }
}


class NotificationSender {
    private factory = new NotificationFactory();

    sendToUser(user: User, msg: Message): void {
        const preferences = user.getPreferences();
        if (preferences.length === 0) {
            console.log(`No Notification preferneces set to user : ${user.name}`)
        }

        preferences.forEach((type) => {
            try {
                const strategies = NotificationFactory.create(type);
                strategies.send(user, msg);
            } catch (err) {
                console.error(err)
            }
        })
    }
}
NotificationFactory.register("email", EmailStrategy);
NotificationFactory.register("sms", SMSStrategy);
NotificationFactory.register("push", PushNotificationStrategy);
NotificationFactory.register("whatsapp", WhatsAppStrategy);


//   
const user = new User("Bhupesh", "bhupesh@example.com", "+1234567890", [
    "email",
    "sms",
    "push",
    "whatsApp"
]);

const message = new Message(
    "Welcome",
    "This is the notification system LLD problem ..."
);

const sender = new NotificationSender();
sender.sendToUser(user, message);
