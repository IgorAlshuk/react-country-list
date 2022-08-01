interface ICountryNativeNameApi {
  [key: string]:
    | {
        common: string;
        official: string;
      }
    | undefined;
}

interface ICountryNameApi {
  common: string;
  official: string;
  nativeName: ICountryNativeNameApi;
}

interface ICountryFlagsApi {
  [key: string]: string;
}

export interface ICountryApi {
  name: ICountryNameApi;
  capital: string[];
  population: number;
  flags: ICountryFlagsApi;
  area: number;
  region: string;
}
export interface ICountry {
  name: string;
  capital: string;
  population: number;
  flag: string;
  area: number;
  region: string;
}

export enum Color {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Danger = "danger",
  Warning = "warning",
  Info = "info",
  Light = "light",
  Dark = "dark",
}

export type BadgeLabel = "area" | "population";