import { StatItems } from '../StatItems/StatItems';
import { Title, Section, List, Item } from './StatList.style';

export const StatList = ({ stats, title }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
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
