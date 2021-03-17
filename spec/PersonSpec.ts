import "jasmine";
import { Person, Visa, MasterCard, Discover } from '../src';

describe("Person", function () {
    let person1: Person;
    let person2: Person;

    beforeEach(function () {
        person1 = new Person();
        person2 = new Person();
    });

    it("should not have any wallets when initialized", function () {
        expect(person1.getWallets()).toEqual([]);
        expect(person2.getWallets()).toEqual([]);
    });

    describe("when one person has a single wallet", function () {
        let visa: Visa;
        let masterCard: MasterCard;
        let discover: Discover;

        beforeEach(function () {
            visa = new Visa(100.00);
            masterCard = new MasterCard(100.00);
            discover = new Discover(100.00);
            person1.addWallet(visa, masterCard, discover);
        });

        it("should calculate the interest per person", function () {
            expect(person1.calculateSimpleInterest()).toEqual(16.00);
        });

        it("should calculate the interest per card", function () {
            expect(visa.calculateSimpleInterest()).toEqual(10.00);
            expect(masterCard.calculateSimpleInterest()).toEqual(5.00);
            expect(discover.calculateSimpleInterest()).toEqual(1.00);
        });
    });

    describe("when one person has multiple wallets", function () {
        let visa: Visa;
        let masterCard: MasterCard;
        let discover: Discover;

        beforeEach(function () {
            visa = new Visa(100.00);
            masterCard = new MasterCard(100.00);
            discover = new Discover(100.00);
            person1.addWallet(visa, discover);
            person1.addWallet(masterCard);
        });

        it("should calculate the interest per person", function () {
            expect(person1.calculateSimpleInterest()).toEqual(16.00);
        });

        it("should calculate the interest per wallet", function () {
            const wallets = person1.getWallets();
            expect(wallets[0].calculateSimpleInterest()).toEqual(11.00);
            expect(wallets[1].calculateSimpleInterest()).toEqual(5.00);
        });
    });

    describe("when two people each have one wallet", function () {
        let visa1: Visa;
        let visa2: Visa;
        let masterCard1: MasterCard;
        let masterCard2: MasterCard;

        beforeEach(function () {
            visa1 = new Visa(100.00);
            visa2 = new Visa(100.00);
            masterCard1 = new MasterCard(100.00);
            masterCard2 = new MasterCard(100.00);
            person1.addWallet(visa1, masterCard1);
            person2.addWallet(visa2, masterCard2);
        });

        it("should calculate the interest per person", function () {
            const p1Interest = person1.calculateSimpleInterest();
            expect(p1Interest).toEqual(15.00);
            expect(person2.calculateSimpleInterest()).toEqual(p1Interest);
        });

        it("should calculate the interest per wallet", function () {
            const p1FirstWalletInterest = person1.getWallets()[0].calculateSimpleInterest();
            expect(p1FirstWalletInterest).toEqual(15.00);
            expect(person2.getWallets()[0].calculateSimpleInterest()).toEqual(p1FirstWalletInterest);
        });
    });
});