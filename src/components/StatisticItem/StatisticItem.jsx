import { IconContext } from 'react-icons';
import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

export const StatisticItem = ({ total, title, Icon }) => {
  return (
    <StatisticBox>
      {/* <IconContext.Provider value={{ color: 'blue', size: 20 }}>
        {icon}
      </IconContext.Provider> */}
      <Icon size={20} color="blue" />
      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
};
