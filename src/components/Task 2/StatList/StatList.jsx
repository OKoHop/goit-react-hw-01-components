import { StatItems } from '../StatItems/StatItems';
import { Title, Section, List, Item } from './StatList.style';

export const StatList = ({ stats }) => {
  return (
    <Section>
      <Title>Upload stats</Title>
      <List>
        {stats.map(stat => (
          <Item key={stat.id}>
            <StatItems stat={stat} />
          </Item>
        ))}
      </List>
    </Section>
  );
};
