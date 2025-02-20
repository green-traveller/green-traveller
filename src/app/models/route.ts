import { RouteLocation } from './route-location';
import { RouteOption } from './route-option';

export interface Route {
  id: string;
  from: RouteLocation;
  to: RouteLocation;
  time: string;
  vehicleId: string;
  passengers: number;
  options: { [optionName: string]: RouteOption };
}
