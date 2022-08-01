import { ICountry, ICountryApi } from "../types";

export const transformCountries = (countries: ICountryApi[]): ICountry[] => {
  return countries.map(
    (country: ICountryApi): ICountry => ({
      name: country.name.common,
      capital: country.capital[0],
      population: country.population,
      flag: country.flags.svg,
      area: country.area,
      region: country.region,
    })
  );
};