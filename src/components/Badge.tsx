import { Color, BadgeLabel } from "../types";

interface IProps {
  label: BadgeLabel;
  value: number;
  color: Color;
}

export const Badge = ({ color, label, value }: IProps) => {
  return (
    <span className={`badge bg-${color} py-3 mx-1 col-2`}>
      {label}: {value}
    </span>
  );
};