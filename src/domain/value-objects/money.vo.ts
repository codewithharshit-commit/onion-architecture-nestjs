export class Money {
    constructor(
        public readonly amount: number,
        public readonly currency: string = 'INR',
    ) {
        this.validate();
    }

    private validate(): void {
        if (this.amount < 0)
            throw new Error('Amount must be greater than Zero');
    }

    add(other: Money): Money {
        this.ensureSameCurrency(other);

        return new Money(this.amount + other.amount, this.currency);
    }

    multiply(multiplier: number): Money {
        return new Money(this.amount * multiplier, this.currency);
    }

    equals(other: Money): boolean {
        return this.amount === other.amount && this.currency === other.currency;
    }

    private ensureSameCurrency(other: Money): void {
        if (this.currency !== other.currency) {
            throw new Error('Currencies do not match');
        }
    }
}
