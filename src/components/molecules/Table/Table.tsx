import React from 'react';
import { IRocket } from '../../../shared/api/types';
import {
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
            <p>{rocket.rocket_name}</p>
            <p>{rocket.diameter.meters} m</p>
            <p>{rocket.height.meters} m</p>
            <p>{rocket.mass.kg} kg</p>
            <p>${rocket.cost_per_launch}</p>
          </StyledTableEl>
        ))}
      </StyledTableUl>
    </StyledTableWrapper>
  );
};

export default Table;
