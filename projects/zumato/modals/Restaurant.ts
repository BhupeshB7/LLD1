import { MenuItem } from "./MenuItem";

export class Restaurant {
    private id: number;
    private name: string;
    private location: string;
    private menu: MenuItem[];
    constructor(id: number, name: string, location: string, menu: MenuItem[]) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.menu = menu;
    }
    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getLocation(): string {
        return this.location;
    }
    getMenu(): MenuItem[] {
        return this.menu;
    }
    setMenu(menu: MenuItem[]): void {
        this.menu = menu;
    }

    setLocation(location: string): void {
        this.location = location;
    }

    setName(name: string): void {
        this.name = name;
    }
}