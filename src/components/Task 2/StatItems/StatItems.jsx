import { Percentage } from './StatItems.style';

export const StatItems = ({ stat }) => {
  return (
    <>
      <span>{stat.label} </span>
      <Percentage>{stat.percentage}%</Percentage>
    </>
  );
};
