import { CreditCard } from "./CreditCard";

export class MasterCard extends CreditCard {
    constructor(initialBalance?: number) {
        super(initialBalance);
    }

    public getSimpleInterestRate(): number {
        return 0.05;
    }
}
