import { styled } from 'styled-components';

export const StyledTableWrapper = styled.div`
  display: grid;
  justify-content: flex-start;
`;

export const StyledTableTitles = styled.div`
  display: flex;
  width: 1110px;
  justify-content: space-between;
`;

export const StyledTableNames = styled.p`
  /* display: flex;
  flex-direction: column; */
`;

export const StyledTableUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const StyledTableEl = styled.li`
  list-style-type: none;
  text-align: right;
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  background-color: #fff;
  border-radius: 8px;
  margin-top: 5px;
  margin-left: -40px;
  padding-left: 15px;
`;
