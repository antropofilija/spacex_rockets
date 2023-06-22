import React, { useEffect, useState } from 'react';
import { API } from '../../../shared/api';
import { IRocket } from '../../../shared/api/types';
import Search from '../../molecules/SearchFilter/SearchFilter';
import Table from '../../molecules/Table';

const SearchTable = () => {
  const [rockets, setRockets] = useState<IRocket[]>([]);
  const [filteredRockets, setFilteredRockets] = useState<IRocket[]>([]);

  useEffect(() => {
    fetchRockets();
  }, []);

  const fetchRockets = async () => {
    try {
      const rocketsData: IRocket[] = await API.getRockets();
      setRockets(rocketsData);
      setFilteredRockets(rocketsData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (query: string) => {
    const filteredResults = rockets.filter((rocket) => {
      const rocketNameMatch = rocket.rocket_name
        .toLowerCase()
        .includes(query.toLowerCase());
      const diameterMatch = rocket.diameter.meters.toString().includes(query);
      const heightMatch = rocket.height.meters.toString().includes(query);
      const massMatch = rocket.mass.kg.toString().includes(query);
      const costMatch = rocket.cost_per_launch.toString().includes(query);
      return (
        rocketNameMatch ||
        diameterMatch ||
        heightMatch ||
        massMatch ||
        costMatch
      );
    });
    setFilteredRockets(filteredResults);
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <Table rockets={filteredRockets} />
    </>
  );
};

export default SearchTable;
