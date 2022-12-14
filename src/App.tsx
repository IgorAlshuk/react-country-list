import { CountryList } from "./components/CountryList";
import countries from "./country-data.json";
import { transformCountries } from "./mappers";
import { ICountry } from "./types";

export const App = () => {
  const transformedCountries: ICountry[] = transformCountries(countries);
  return (
    <div className="container">
      <h1 className="py-4">Country List</h1>
      <CountryList countries={transformedCountries} />
    </div>
  );
};