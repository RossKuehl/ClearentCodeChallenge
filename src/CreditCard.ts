export abstract class CreditCard {
    private balance: number = 0.00;

    constructor(initialBalance?: number) {
        if (typeof initialBalance !== "undefined") {
            this.balance = initialBalance;
        }
    }

    public getBalance(): number {
        return this.balance;
    }

    public addBalance(amount: number): void {
        this.balance += amount;
    }

    public removeBalance(amount: number): void {
        if (amount > this.balance) {
            throw new Error("Cannot remove more than the total balance.");
        }
        this.balance -= amount;
    }

    public calculateSimpleInterest(): number {
        return this.balance * this.getSimpleInterestRate();
    }

    public abstract getSimpleInterestRate(): number;
}
