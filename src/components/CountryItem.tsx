import { ICountry, Color } from "../types";
import { Badge } from "./Badge";

interface IProps {
  country: ICountry;
}

export const CountryItem = ({ country }: IProps) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <img className="col-lg-1 float-left" src={country.flag} alt="Flag" />
      <p className="col-2 mx-5 text-left">{country.name}</p>
      <p className="col-2 text-left">{country.capital}</p>
      <p className="col-2 text-left">{country.region}</p>
      <Badge color={Color.Primary} label="area" value={country.area} />
      <Badge
        color={Color.Secondary}
        label="population"
        value={country.population}
      />
    </li>
  );
};