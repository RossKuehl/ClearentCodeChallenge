import { CreditCard } from "./";

export class Discover extends CreditCard {
    constructor(initialBalance?: number) {
        super(initialBalance);
    }

    public getSimpleInterestRate(): number {
        return 0.01;
    }
}
