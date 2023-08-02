import { StatItems } from './StatItems';

export const StatList = ({ stats }) => {
  return (
    <section>
      <h2>Upload stats</h2>
      <ul>
        {stats.map(stat => (
          <li key={stat.id}>
            <StatItems stat={stat} />
          </li>
        ))}
      </ul>
    </section>
  );
};
