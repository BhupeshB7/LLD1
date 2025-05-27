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
    create(type: string): NotificationStrategy {
        switch (type.toLocaleLowerCase()) {
            case "email":
                return new EmailStrategy();
            case "sms":
                return new SMSStrategy();
            case "push":
                return new PushNotificationStrategy();
            case "whatsapp":
                return new WhatsAppStrategy();
            default:
                throw new Error(`Unknown notification type : ${type}`)
        }
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
                const strategies = this.factory.create(type);
                strategies.send(user, msg);
            } catch (err) {
                console.error(err)
            }
        })
    }
}

// Example usage:
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
