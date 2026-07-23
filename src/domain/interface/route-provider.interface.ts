import { Route } from '../model/Route.model';

export interface RouteProvider {
    getRoute(pickup: Location, drop: Location): Promise<Route>;
}
