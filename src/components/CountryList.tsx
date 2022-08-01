import { ICountry } from "../types";
import { CountryItem } from "./CountryItem";

interface IProps {
  countries: ICountry[];
}

export const CountryList = ({ countries }: IProps) => {
  return (
    <ul className="list-group">
      {countries.map((country) => {
        return <CountryItem key={country.name} country={country} />;
      })}
    </ul>
  );
};