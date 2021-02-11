import { TTUI } from "../app/app.interfaces";
import { ComputedRef } from "vue";
import Origin from "@/models/Origin";
import Destination from "@/models/Destination";
import MeetingPolicy from "@/models/MeetingPolicy";
import { IDestinationScoreWeights } from "../troop/troop.interfaces";

export interface IAudit {
  updated_at: Date;
  updated_by: string;
}

export interface IMeeting {
  audit?: IAudit;
  id?: string;
  name: string;
  owner: { id: string; name: string };
  flexible_dates?: boolean;
  meeting_policy?: MeetingPolicy;
  meeting_type?: {
    id?: string;
    name?: string;
  };
  period?: IMeetingPeriod;
  flexible_times?: boolean;
  bill_country?: object;
  business_unit?: object;
  analysis_priority?: {
    cost?: number;
    time?: number;
    co2?: number;
  };
  required_services?: {
    transport?: boolean;
    accommodation?: boolean;
    meeting_space?: boolean;
  };
  summary?: {
    origins: number;
    destinations: number;
    travellers: number;
  };
  analysis?: {
    timestamp: Date;
    analysis_status: string;
  };
  preferences?: MeetingPreferences;
  ttUI?: TTUI;
}

export interface meetingScores {
  // SAFETY
  covidMin: number;
  covidMax: number;
  quarantineMin: number;
  quarantineMax: number;
  riskMin: number;
  riskMax: number;
  restrictionsMin: number;
  restrictionsMax: number;
  // SERVICE
  visasMin: number;
  visasMax: number;
  weatherMin: number;
  weatherMax: number;
  vatMin: number;
  vatMax: number;
  cityRankMin: number;
  cityRankMax: number;
  // SUSTAINABILITY
  co2Min: number;
  co2Max: number;
  travelTimeMin: number;
  travelTimeMax: number;
  timeZoneMin: number;
  timeZoneMax: number;
  // SAVINGS
  costMin: number;
  costMax: number;
}

export interface MeetingPreferences {
  suggestions: {
    excluded_suggestions: string[];
    widget: {
      filters: {
        riskSlider: number;
        sygicSlider: Array<number>;
        officeSlider: Array<number>;
      };
    };
  };
  accommodation: {
    widget: {
      filters: {
        roomSlider: Array<number>;
        distance_from_search: Array<number>;
        price: Array<number>;
        star_rating: Array<number>;
      };
    };
  };
  report_pages: Object;
  weights: IDestinationScoreWeights;
}

export interface IMeetingPeriod {
  start_date: Date | undefined;
  start_local: Date | undefined;
  end_date: Date | undefined;
  end_local: Date | undefined;
  start_time?: string;
  end_time?: string;
}

export interface IOrigin {
  id: string;
  name: string;
  google_place_details: any;
  skyscanner_details: any;
  place: Place;
  time_zone: {
    rawOffset: number;
    timeZoneId: string;
  };
  summary: {
    policy: number;
    economy: number;
    business: number;
    total: number;
  };
  analysis: {
    timestamp: Date;
    analysis_status: string;
  };
  ttUI?: TTUI;
}

export interface IOriginAdd {
  meetingId: string | string[];
  originId: string;
}

export interface IAnalyzeDestination {
  destination: string;
}

export interface IDestinationAdd {
  meetingId: string | string[];
  destinationId: string;
}

export interface ISelectedOption {
  cost: number;
  stops: number;
  max_stop_risk: number;
  total_duration: number; //Total duration including stops
  travel_duration: number; //Time busy travelling
  emissions: number;
}

export interface ITransportSummary {
  itinerary_count: {
    flight: number;
    transit: number;
    driving: number;
  };
  selected_option: ISelectedOption;
}

export interface IDestination {
  id: string;
  name: string;
  google_place_details: any;
  skyscanner_details: any;
  sygic_details: any;
  place: Place;
  time_zone: {
    rawOffset: number;
    timeZoneId: string;
  };
  ttUI?: TTUI;
  indicators?: IDestinationIndicators;
  scores?: IDestinationScores;
  summary: Object;
  transport_summary: Map<string, ITransportSummary>;
  analysis: {
    timestamp: Date;
    analysis_status: string;
  };
  meeting_policy_overrides: any;
}

export interface IDestinationIndicators {
  travel_restrictions: number;
  travellers_to_quarantine: number;
  covid_infection_rate: number;
  visas_required: number;
  country_risk: number;
  travellers_count: number;
  avg_temperature: number | null;
  offices: number | null;
  vat: number;
  city_rank: number;
  travel_time: number;
  timezone: number;
  cost: number;
  co2: number;
}

export interface ISuggestionIndicators {
  travel_restrictions: number;
  travellers_to_quarantine: number;
  covid_infection_rate: number;
  visas_required: number;
  country_risk: number;
  travellers_count: number;
  avg_temperature: number | null;
  offices: number | null;
  vat: number;
  city_rank: number;
  travel_time: number;
  timezone: number;
  cost: number;
  co2: number;
}

export interface ISuggestionScores {
  safety: {
    normalized_indicators: {
      covid_infection_rate: number;
      travellers_to_quarantine: number;
      country_risk: number;
      travel_restrictions: number;
    };
    score: number;
  };
  service: {
    normalized_indicators: {
      visas_required: number;
      avg_temperature: number;
      vat: number;
      city_rank: number;
    };
    score: number;
  };
  sustainability: {
    normalized_indicators: {
      co2: number;
      travel_time: number;
      timezone: number;
    };
    score: number;
  };
  savings: {
    normalized_indicators: {
      cost: number;
    };
    score: number;
  };
  total_score: number;
}

export interface IDestinationScores {
  safety: {
    normalized_indicators: {
      covid_infection_rate: number;
      travellers_to_quarantine: number;
      country_risk: number;
      travel_restrictions: number;
    };
    score: number;
  };
  service: {
    normalized_indicators: {
      visas_required: number;
      avg_temperature: number;
      vat: number;
      city_rank: number;
    };
    score: number;
  };
  sustainability: {
    normalized_indicators: {
      co2: number;
      travel_time: number;
      timezone: number;
    };
    score: number;
  };
  savings: {
    normalized_indicators: {
      cost: number;
    };
    score: number;
  };
  total_score: number;
}

export type ITraveller = {
  id?: string;
  name: string;
  originId: string;
  email?: string;
  nationality: string;
  travel_class?: string;
  ttUI?: TTUI;
};

export type Route = {
  id: string;
  name: string;
  place: Place;
  ttUI: TTUI;
};

export type IHotel = {
  id: string;
  providerId: {
    default: number;
  };
  hotelId: number | null;
  title: {
    default: string;
  };
  chain: {
    default: string;
  };
  numberOfRooms: {
    default: string;
  };
  place: {
    default: string;
  };
  link: {
    default: string;
  };
  thumbnail: {
    default: string;
  };
  star: {
    default: string;
  };
  price: {
    default: string;
  };
  distanceFromSearch: {
    default: string;
  };
  meetingSpaces: boolean;
  greenStatus: boolean;
  recommended: boolean;
  ttUI?: TTUI;
  summary: {
    selected: boolean;
  }
};

//Parameters to define a place on various documents like origins, destinations etc
export interface Place {
  city: {
    id: string;
    sky_id: string;
    name: string;
    iata: string;
    latitude: number;
    longitute: number;
  };
  country: {
    name: string;
    code: string;
    risk: number;
  };
  latitude: number;
  longitude: number;
  sygic_id: string;
  sygic_image_id: string;
}

//Define the status of a store loader process.
export enum MeetingState {
  "new" = "NEW",
  "created" = "CREATED",
  "completed" = "COMPLETED",
}

export const defaultWeights: IDestinationScoreWeights = {
  safety: {
    weight: 25, // => CALCULATE
    kpis: {
      // => CALCULATE
      infections: 25, // => CALCULATE
      days_quarantine: 25, // => CALCULATE
      risk: 25, // => CALCULATE
      restrictions: 25, // => CALCULATE
    },
  },
  service: {
    weight: 25, // => CALCULATE
    kpis: {
      // => CALCULATE
      visas: 25, // => CALCULATE
      weather: 25, // => CALCULATE
      vat: 25,
      city_rating: 25, // => CALCULATE
    },
  },
  sustainability: {
    weight: 25, // => CALCULATE
    kpis: {
      co2: 33.3333333,
      travel_time: 33.3333333,
      timezone: 33.3333333, // => CALCULATE
    },
  },
  savings: {
    weight: 25,
    kpis: {
      cost: 100,
    },
  },
};
