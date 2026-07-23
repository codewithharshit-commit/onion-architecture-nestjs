import { RideType } from '../enums/ride-type.enum';
import { Money } from '../value-objects/money.vo';

export class RideEstimate {
    constructor(
        public readonly pickup: Location,
        public readonly drop: Location,
        public readonly distanceInKM: number,
        public readonly travelTimeInMinutes: number,
        public readonly rideType: RideType,
        public readonly estimatedFare: Money,
    ) {}
}
