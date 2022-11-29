import { useEffect, useState } from "react";

export const usePagination = ({ roomsData }) => {
  const [filteredValues, setFilteredValues] = useState([]);

  const [pagination, setPagination] = useState({
    currentPage: 1,
    current_values: [],
    totalPages: null,
    values: [],
    query: null,
  });

  const pageLimit = 12;
  const onPageChanged = ({
    currentPage,
    totalPages,
    pageLimit,
    filteredVal = filteredValues,
  }) => {
    let values = filteredVal;

    let offset = (currentPage - 1) * pageLimit;
    let current_values = values.slice(offset, offset + pageLimit);

    setPagination({
      ...pagination,
      currentPage: currentPage,
      current_values: current_values,
      totalPages: totalPages,
    });
  };

  useEffect(() => {
    setFilteredValues(roomsData);
  }, [roomsData]);

  useEffect(() => {
    onPageChanged({ currentPage: 1, totalPages: 15, pageLimit });
  }, [filteredValues]);

  return {
    pagination,
    filteredValues,
    pageLimit,
    onPageChanged,
  };
};
