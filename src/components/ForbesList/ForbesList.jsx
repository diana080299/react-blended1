import { ForbesListItem } from 'components';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({ forbes }) => {
  return (
    <LeaderBoard>
      <BoardHeader>
        <BoardTitle>
          <TitleTop>Forbes</TitleTop>
          <TitleBottom>Leader board</TitleBottom>
        </BoardTitle>
      </BoardHeader>

      <LeaderBoardProfiles>
        {forbes.map(({ name, capital, avatar, isIncrease, id }) => {
          return (
            <ForbesListItem
              key={id}
              name={name}
              capital={capital}
              avatar={avatar}
              isIncrease={isIncrease}
            />
          );
        })}{' '}
      </LeaderBoardProfiles>
    </LeaderBoard>
  );
};
