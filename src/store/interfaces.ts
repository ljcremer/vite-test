import { Dayjs } from "dayjs";

export interface FlightMetrics {
  itineraryCount: number;
  filteredCount: number;
  maxWindowDuration: number;
  windowFrameWidth: number;
  minuteFactor: number;
  origin: string | null;
  originTimezone: number;
  destination: string | null;
  destinationTimezone: number;
  outboundFilterDate: Dayjs;
  showOutOfPolicy: boolean;
  showEconomy: boolean;
  PremiumEconomy: boolean;
  showBusiness: boolean;
  orderBy: string;
  windows: { outbound: { start: Dayjs; end: Dayjs; duration: number }; inbound: { start: Dayjs; end: Dayjs; duration: number } };
  maxMin: {
    stops: [number, number];
    price: [number, number];
    duration: [number, number];
    emissions: [number, number];
    troopScore: [number, number];
  };
  sliders: {
    troopScoreNormalized: number;
    stops: number;
    price: number;
    duration: number;
    emissions: number;
    outbound: number;
    inbound: number;
  };
  histogramMaxCount: {
    stops: number;
    price: number;
    duration: number;
    emissions: number;
    troopScoreNormalized: number;
  };
  histogram: {
    stopsFiltered: any[];
    stops: any[];
    priceFiltered: any[];
    price: any[];
    durationFiltered: any[];
    duration: any[];
    emissionsFiltered: any[];
    emissions: any[];
    troopScoreNormalized: any[];
    troopScoreNormalizedFiltered: any[];
  };
}
