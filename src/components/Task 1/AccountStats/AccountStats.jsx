import { List, Item, SpanStat, SpanData } from './AccountStats.style';

export const AccountStats = ({ data: { stats } }) => {
  return (
    <List>
      <Item>
        <SpanStat>Followers </SpanStat>
        <SpanData>{stats.followers}</SpanData>
      </Item>
      <Item>
        <SpanStat>Views </SpanStat>
        <SpanData>{stats.views}</SpanData>
      </Item>
      <Item>
        <SpanStat>Likes </SpanStat>
        <SpanData>{stats.likes}</SpanData>
      </Item>
    </List>
  );
};
