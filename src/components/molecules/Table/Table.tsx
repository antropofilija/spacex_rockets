import React from 'react';
import { IRocket } from '../../../shared/api/types';
import {
  StyledDiameter,
  StyledHeight,
  StyledLeft,
  StyledMass,
  StyledRight,
  StyledTableEl,
  StyledTableNames,
  StyledTableTitles,
  StyledTableUl,
  StyledTableWrapper,
} from './style';

interface TableProps {
  rockets: IRocket[];
}

const Table = ({ rockets }: TableProps) => {
  return (
    <StyledTableWrapper>
      <StyledTableTitles>
        <StyledTableNames>Rocket name</StyledTableNames>
        <StyledTableNames>Diameter</StyledTableNames>
        <StyledTableNames>Height</StyledTableNames>
        <StyledTableNames>Mass</StyledTableNames>
        <StyledTableNames>Cost per launch</StyledTableNames>
      </StyledTableTitles>

      <StyledTableUl>
        {rockets.map((rocket) => (
          <StyledTableEl key={rocket.id}>
            <StyledLeft>{rocket.rocket_name}</StyledLeft>
            <StyledDiameter>{rocket.diameter.meters} m</StyledDiameter>
            <StyledHeight>{rocket.height.meters} m</StyledHeight>
            <StyledMass>{rocket.mass.kg} kg</StyledMass>
            <StyledRight>${rocket.cost_per_launch}</StyledRight>
          </StyledTableEl>
        ))}
      </StyledTableUl>
    </StyledTableWrapper>
  );
};

export default Table;
