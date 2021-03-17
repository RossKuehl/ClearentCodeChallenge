import { CreditCard } from "./CreditCard";

export class Wallet {
    private creditCards: CreditCard[];

    constructor(...cards: CreditCard[]) {
        this.creditCards = cards || [];
    }

    public addCard(card: CreditCard): void {
        this.creditCards.push(card);
    }

    public removeCard(card: CreditCard): void {
        this.creditCards.forEach((item, index) => {
            if (item === card) this.creditCards.splice(index, 1);
        });
    }

    public calculateSimpleInterest(): number {
        return this.creditCards.reduce((a, c) => a + c.calculateSimpleInterest(), 0.00);
    }
}
