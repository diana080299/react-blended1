import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import {
  MdPeople,
  MdOutlineProductionQuantityLimits,
  MdNoDrinks,
} from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

export const Statistics = ({ stats, title }) => {
  // const icons = [
  //   <FaRegThumbsUp />,
  //   <MdNoDrinks />,
  //   <MdPeople />,
  //   <MdOutlineProductionQuantityLimits />,
  //   <GiTreeDoor />,
  // ];
  const icons = [
    FaRegThumbsUp,
    MdNoDrinks,
    MdPeople,
    MdOutlineProductionQuantityLimits,
    GiTreeDoor,
  ];
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        {stats.map((value, index) => {
          return (
            <StatisticItem
              Icon={icons[index]}
              key={value.id}
              total={value.total}
              title={value.title}
            />
          );
        })}
      </StatisticsList>
    </>
  );
};
