import { CreditCard } from "./CreditCard";

export class Visa extends CreditCard {
    constructor(initialBalance?: number) {
        super(initialBalance);
    }

    public getSimpleInterestRate(): number {
        return 0.10;
    }
}
