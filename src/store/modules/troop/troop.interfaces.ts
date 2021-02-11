import { ComputedRef } from "vue";
import { ISuggestionScores, ISuggestionIndicators } from "../meeting/meeting.interfaces";
import { Dayjs } from "dayjs";

export interface ICity {
  id?: string;
  name: string | ComputedRef<string>;
  country_code: string;
}

export interface ICountry {
  id?: string;
  name: string | ComputedRef<string>;
  covid19?: {
    infection: {
      rate: number;
    };
    international_travel: {
      restrictions: {
        from: Array<string>;
      };
      quarantine_on_arrival: {
        days: number;
      };
    };
  };
  visa_requirements?: {
    data: Object;
  };
  travel_advisory?: {
    score?: number;
  };
}

export interface ICarrier {
  id: string;
  country: string;
  name: string;
  deleted: boolean;
  iata: string;
  icao: string;
  three_digit: string;
}

export type CitySuggestData = {
  iata_code: string;
  country_code: string;
  region: string;
  lat: number;
  lng: number;
  name: string;
  risk: number;
  avgtemp: number;
  time_zone: number;
  risk_score: number;
  sygic_rating: number;
  sygic_rating_score: number;
  offices: number;
  office_score: number;
  is_international: number;
  ranking_score: number;
  sygic_image_id: string;
  indicators: ISuggestionIndicators;
  scores: ISuggestionScores;
};

export interface IDestinationScoreWeights {
  safety: {
    weight: number;
    kpis: {
      //Must add up to 100
      infections: number; //eg 25
      days_quarantine: number; //eg 25
      risk: number; //eg 25
      restrictions: number; //eg 25
    };
  };
  service: {
    weight: number;
    kpis: {
      //Must add up to 100
      visas: number; //eg 25
      weather: number; //eg 25
      vat: number; //eg 25
      city_rating: number; //eg 25
    };
  };
  sustainability: {
    weight: number;
    kpis: {
      //Must add up to 100
      co2: number; //eg 33.3333333
      travel_time: number; //eg 33.3333333
      timezone: number; //eg 33.3333333
    };
  };
  savings: {
    weight: number;
    kpis: {
      //Must add up to 100
      cost: number; //eg 100
    };
  };
}

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

export const qwe = () => {
  return "hello qwe";
};
