interface ISubscriber {
    update(): void;
}

interface IChannel {
    Subscribe(subscriber: ISubscriber): void;
    UnSubscribe(subscriber: ISubscriber): void;
    notifySubscriber(): void;
}

class Channel implements IChannel {
    private name: string;
    private latestVideo: string = '';
    private subscribes: ISubscriber[] = [];
    constructor(name: string) {
        this.name = name;
    }
    Subscribe(subscriber: ISubscriber): void {
        if (!this.subscribes.includes(subscriber)) {
            this.subscribes.push(subscriber);
        }
    }
    UnSubscribe(subscriber: ISubscriber): void {
        this.subscribes = this.subscribes.filter((sub) => sub !== subscriber);
    }
    notifySubscriber(): void {
        for (const subscriber of this.subscribes) {
            subscriber.update();
        }
    }
    getVideoData():string {
       return this.latestVideo;
    }
    uploadVideo(title: string): void {
      this.latestVideo = title;
      console.log(`New Video ${this.latestVideo} uploaded by ${this.name}`)
      this.notifySubscriber();
    }
}

class Subscriber implements ISubscriber {
    private name: string;
    private channel: Channel;
    constructor(name: string, channel: Channel) {
        this.name = name;
        this.channel = channel;
    }
    update(): void {
        console.log(`Hey ${this.name} , ${this.channel.getVideoData()}`)
    }
}


// ---------- Main ----------
const techChannel = new Channel("Tech Bhupesh");

const s1 = new Subscriber("Alice", techChannel);
const s2 = new Subscriber("Bob", techChannel);

techChannel.Subscribe(s1);
techChannel.Subscribe(s2);

techChannel.uploadVideo("Observer Pattern in TypeScript");

techChannel.UnSubscribe(s1);

techChannel.uploadVideo("Design Patterns for Beginners");
