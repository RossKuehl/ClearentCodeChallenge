import { CreditCard } from "./CreditCard";
import { Wallet } from "./Wallet";

export class Person {
    private wallets: Wallet[] = [];

    public getWallets(): Wallet[] {
        return this.wallets;
    }

    public addWallet(...cards: CreditCard[]): void {
        const wallet = new Wallet(...cards);
        this.wallets.push(wallet);
    }

    public removeWallet(wallet: Wallet): void {
        this.wallets.forEach((item, index) => {
            if (item === wallet) this.wallets.splice(index, 1);
        });
    }

    public calculateSimpleInterest(): number {
        return this.wallets.reduce((a, c) => a + c.calculateSimpleInterest(), 0.00);
    }
}
