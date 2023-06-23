import React, { ChangeEvent, useEffect, useState } from 'react';
import Input from '../../atoms/Input';
import ICONS from '../../../assets/icons';
import { StyledH3, StyledP, StyledSearchFilterWrapper } from './style';

interface ISearchProps {
  onSearch: (query: string) => void;
  resultsCount: number;
}

const Search = ({ onSearch, resultsCount }: ISearchProps) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchValue(query);
    onSearch(query);
  };

  return (
    <StyledSearchFilterWrapper>
      <StyledH3>SpaceX rockets</StyledH3>
      <StyledP>{resultsCount} Results</StyledP>{' '}
      <Input
        type='text'
        icon={ICONS.search}
        placeholder='Search'
        onChange={handleSearch}
        value={searchValue}
        setvalue={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
      />
    </StyledSearchFilterWrapper>
  );
};

export default Search;
