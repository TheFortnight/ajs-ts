import Buyable from "./interface";

export default class Cart {
    _items: Buyable[] = [];

    add(item: Buyable): void {
    this._items.push(item);
    }

    get(): Buyable[] {
    return [...this._items];
    }

    getSum(): number {
        return this._items.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
    }

    getSumDisc(disc: number): number {
        const sum: number = this._items.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
        return sum - sum/100*disc;
    }

    removeItem(itemId: number): void {
        
        const ind: any = this._items.find(el => el.id === itemId);
        this._items.splice(ind, 1);
    }
    }
