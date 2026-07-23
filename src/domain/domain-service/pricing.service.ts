import { RideType } from '../enums/ride-type.enum';
import { Money } from '../value-objects/money.vo';

export class PricingService {
    private readonly pricing = {
        [RideType.BIKE]: {
            baseFare: 30,
            perKm: 6,
            perMinute: 1,
        },
        [RideType.AUTO]: {
            baseFare: 40,
            perKm: 8,
            perMinute: 1.5,
        },
        [RideType.STANDARD]: {
            baseFare: 50,
            perKm: 10,
            perMinute: 2,
        },
        [RideType.PREMIUM]: {
            baseFare: 100,
            perKm: 18,
            perMinute: 3,
        },
        [RideType.SUV]: {
            baseFare: 120,
            perKm: 22,
            perMinute: 4,
        },
    };

    calculateFare(
        distanceInKM: number,
        durationInMinutes: number,
        rideType: RideType,
    ): Money {
        const pricing = this.pricing[rideType];

        const fare =
            pricing.baseFare +
            distanceInKM * pricing.perKm +
            durationInMinutes * pricing.perMinute;

        return new Money(Math.round(fare));
    }
}
