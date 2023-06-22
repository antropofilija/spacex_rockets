import { styled } from 'styled-components';

export const StyledTableWrapper = styled.div`
  display: grid;
  justify-content: flex-start;
`;

export const StyledTableTitles = styled.div`
  display: flex;
  width: 1097px;
  /* justify-content: space-between; */
`;

export const StyledTableNames = styled.p`
  margin-top: 52px;
  color: #676c7e;
  font-size: 14px;
  font-weight: 500;

  &:nth-child(1) {
    padding-left: 29px;
  }

  &:nth-child(2) {
    padding-left: 120px;
  }

  &:nth-child(3) {
    padding-left: 160px;
  }

  &:nth-child(4) {
    padding-left: 210px;
  }

  &:nth-child(5) {
    padding-left: 80px;
  }
`;

export const StyledTableUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledTableEl = styled.li`
  list-style-type: none;
  text-align: right;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  height: 49px;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  margin-top: 5px;
  font-size: 14px;
  width: 1097px;
`;

export const StyledLeft = styled.p`
  text-align: left;
  padding-left: 29px;
`;

export const StyledDiameter = styled.p`
  text-align: right;
  padding-right: 80px;
`;

export const StyledHeight = styled.p`
  text-align: right;
  padding-right: 60px;
`;

export const StyledMass = styled.p`
  text-align: right;
  padding-left: 40px;
`;

export const StyledRight = styled.p`
  text-align: right;
  /* padding-left: 200px; */
`;
