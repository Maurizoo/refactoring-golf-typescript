import {Incalculable} from "./incalculable";
//hole 3

export class Money {
    public value: number;
    public currency: string;


    constructor(value: number, currency: string) {
        this.value = value;
        this.currency = currency;
    }
}

export class Takehomecalculator {
    private percent: number

    constructor(percent: number) {
        this.percent = percent;
    }

    netAmount(first: Money, ...rest : Money[] ): Money {

        const monies: Array<Money> = Array.from(rest);
        let total: Money = first

        for (let next of monies) {

        }

        for (const next of monies) {
            total = this.plus(total, next)
        }

        const amount:number = total.value * (this.percent / 100.0 );
        const tax: Money = new Money(Math.trunc(amount), first.currency);

        if (total.currency !== tax.currency) {
            throw new Incalculable()
        }
        return new Money(total.value - tax.value, first.currency)
    }


    private plus(total: Money, next: Money): Money {
        if (next.currency !== total.currency) {
            throw new Incalculable()
        }
        return new Money(total.value + next.value, next.currency);
    }
}