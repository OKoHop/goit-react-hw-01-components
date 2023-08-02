export const StatItems = ({ stat }) => {
  return (
    <>
      <span>{stat.label}</span>
      <span>{stat.percentage}</span>
    </>
  );
};
